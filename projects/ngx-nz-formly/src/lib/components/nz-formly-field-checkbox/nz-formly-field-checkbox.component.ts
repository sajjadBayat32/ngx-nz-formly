import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormlyCheckboxProps } from '../../ngx-nz-formly-props.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nz-formly-field-checkbox',
  templateUrl: './nz-formly-field-checkbox.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, NzCheckboxModule]
})
export class NzFormlyFieldCheckboxComponent
  extends FieldType<FieldTypeConfig<NzFormlyCheckboxProps>>
  implements OnInit
{
  private destroyRef = inject(DestroyRef);

  get fieldID() {
    return 'control-' + this.field.key;
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
