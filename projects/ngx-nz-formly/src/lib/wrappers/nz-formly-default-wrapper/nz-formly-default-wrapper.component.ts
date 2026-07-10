import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldTypeConfig, FieldWrapper, FormlyModule } from '@ngx-formly/core';
import { NzFormlyCommonProps } from '../../ngx-nz-formly-props.model';

@Component({
  selector: 'app-nz-formly-default-wrapper',
  templateUrl: './nz-formly-default-wrapper.component.html',
  imports: [CommonModule, FormlyModule]
})
export class NzFormlyDefaultWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
