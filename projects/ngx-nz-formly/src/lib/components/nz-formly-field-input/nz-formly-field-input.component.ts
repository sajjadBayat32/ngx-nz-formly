import { AfterViewInit, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxMaskDirective } from 'ngx-mask';
import { NzFormlyInputProps } from '../../ngx-nz-formly-props.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { CountryCodeMask, CountryMasks2 } from './phone-mask.config';

const DefaultPhoneMask: CountryCodeMask = {
  countryShortName: 'IR',
  prefix: '+98',
  globalMask: '+00(000)000-0000'
};

@Component({
  selector: 'app-nz-formly-field-input',
  templateUrl: './nz-formly-field-input.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NzInputModule,
    NzIconModule,
    NgxMaskDirective
  ]
})
export class NzFormlyFieldInputComponent
  extends FieldType<FieldTypeConfig<NzFormlyInputProps>>
  implements AfterViewInit
{
  private destroyRef = inject(DestroyRef);
  mask: string | undefined;

  get type() {
    return this.props.type ?? 'text';
  }

  get fieldID() {
    return 'control-' + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? 'error' : '';
  }

  ngAfterViewInit() {
    this.createInitState();
    this.onValueChange();
  }

  createInitState() {
    if (this.props.mask === 'phone') {
      this.mask = DefaultPhoneMask.globalMask;
      this.handlePhoneMask();
    } else {
      this.mask = this.props.mask;
    }
  }

  handlePhoneMask() {
    this.formControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((value: string) => {
          if (value == '') {
            // hint: without setTimeout we don't have Ctrl + A -> delete
            setTimeout(() => {
              this.mask = DefaultPhoneMask.globalMask;
            });
          } else {
            const mask = this.findAppropriateMask(value);
            if (mask && this.mask !== mask.globalMask) {
              this.mask = mask.globalMask?.replace(/#|[1-9]/g, '0');
            }
          }
        })
      )
      .subscribe();
  }

  onValueChange() {
    this.formControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((value: string) => {
          if (typeof this.props?.change == 'function') {
            this.props.change(this.field, value);
          }
        })
      )
      .subscribe();
  }

  findAppropriateMask(value: string): CountryCodeMask | null {
    const newMask = CountryMasks2.filter((item) => this.exactEquality(value, item.prefix)).find(
      (item) => value.length <= item.globalMask.length
    );
    if (newMask) return newMask;
    return null;
  }

  exactEquality(str: string, prefix: string): boolean {
    // hint: replace function removes all characters except numbers to return clean numeric string
    // hint: index of convince us to match prefix on first index of input value
    const new_str = str.replace(/[^0-9.]/g, '');
    const new_prefix = prefix.replace(/[^0-9.]/g, '');
    return new_str.indexOf(new_prefix) == 0;
  }

  changeShowPassword(input: any) {
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  showPassword(input: any): boolean {
    return input.type === 'text';
  }
}
