import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormlyInputProps } from '../../formly-props.model';

@Component({
  selector: 'app-formly-field-input',
  templateUrl: './formly-field-input.component.html',
  styleUrls: ['./formly-field-input.component.scss'],
})
export class FormlyFieldInputComponent
  extends FieldType<FieldTypeConfig<FormlyInputProps>>
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit() {}
}
