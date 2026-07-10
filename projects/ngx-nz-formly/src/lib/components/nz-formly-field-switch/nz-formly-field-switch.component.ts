import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormlySwitchProps } from '../../ngx-nz-formly-props.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nz-formly-field-switch',
  templateUrl: './nz-formly-field-switch.component.html',
  styleUrls: [],
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, NzSwitchModule]
})
export class NzFormlyFieldSwitchComponent
  extends FieldType<FieldTypeConfig<NzFormlySwitchProps>>
  implements OnInit
{
  private destroyRef = inject(DestroyRef);

  get fieldID() {
    return 'control-' + this.field.key;
  }

  ngOnInit() {
    this.onValueChanges();
  }

  onValueChanges() {
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
