import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormlySelectProps } from '../../ngx-nz-formly-props.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nz-formly-field-select',
  templateUrl: './nz-formly-field-select.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, NzSelectModule]
})
export class NzFormlyFieldSelectComponent
  extends FieldType<FieldTypeConfig<NzFormlySelectProps>>
  implements OnInit
{
  private destroyRef = inject(DestroyRef);

  get fieldID() {
    return 'control-' + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? 'error' : '';
  }

  ngOnInit() {
    this.onValueChange();
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
}
