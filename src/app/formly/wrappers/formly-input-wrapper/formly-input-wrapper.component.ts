import { Component } from '@angular/core';
import { FieldTypeConfig, FieldWrapper } from '@ngx-formly/core';
import { FormlyCustomFieldProps } from '../../formly-props.model';

@Component({
  selector: 'app-formly-input-wrapper',
  templateUrl: './formly-input-wrapper.component.html',
  styleUrls: ['./formly-input-wrapper.component.scss'],
})
export class FormlyInputWrapperComponent extends FieldWrapper<
  FieldTypeConfig<FormlyCustomFieldProps>
> {}
