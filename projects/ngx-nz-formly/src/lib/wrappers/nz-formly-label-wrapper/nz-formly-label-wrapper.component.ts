import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldTypeConfig, FieldWrapper } from '@ngx-formly/core';
import { NzFormlyCommonProps } from '../../ngx-nz-formly-props.model';

@Component({
  selector: 'app-nz-formly-label-wrapper',
  templateUrl: './nz-formly-label-wrapper.component.html',
  imports: [CommonModule]
})
export class NzFormlyLabelWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
