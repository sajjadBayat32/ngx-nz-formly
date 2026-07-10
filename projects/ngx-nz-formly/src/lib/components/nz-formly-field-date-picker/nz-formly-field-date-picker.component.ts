import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormlyDatePickerProps } from '../../ngx-nz-formly-props.model';

@Component({
  selector: 'app-nz-formly-field-date-picker',
  templateUrl: './nz-formly-field-date-picker.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, NzDatePickerModule]
})
export class NzFormlyFieldDatePickerComponent extends FieldType<
  FieldTypeConfig<NzFormlyDatePickerProps>
> {
  get fieldID() {
    return 'control-' + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? 'error' : '';
  }
}
