import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormlyButtonProps } from '../../ngx-nz-formly-props.model';

@Component({
  selector: 'app-nz-formly-button',
  templateUrl: './nz-formly-button.component.html',
  styleUrls: [],
  imports: [CommonModule, NzButtonModule]
})
export class NzFormlyButtonComponent extends FieldType<FormlyFieldConfig<NzFormlyButtonProps>> {
  onClick() {
    if (typeof this.props?.click == 'function') {
      this.props.click();
    }
  }
}
