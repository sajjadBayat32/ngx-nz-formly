import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormlyUploaderProps } from '../../ngx-nz-formly-props.model';

@Component({
  selector: 'app-nz-formly-uploader',
  templateUrl: './nz-formly-uploader.component.html',
  imports: [CommonModule, NzUploadModule, NzIconModule]
})
export class NzFormlyUploaderComponent extends FieldType<FieldTypeConfig<NzFormlyUploaderProps>> {
  handleChange(event: NzUploadChangeParam): void {
    if (this.props.nzChange) this.props.nzChange(event);
  }
}
