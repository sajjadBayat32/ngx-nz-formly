import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyUploaderProps } from "../../ngx-nz-formly-props.model";
import { NzUploadChangeParam } from "ng-zorro-antd/upload";

@Component({
  selector: "app-nz-formly-uploader",
  templateUrl: "./nz-formly-uploader.component.html",
})
export class NzFormlyUploaderComponent extends FieldType<
  FieldTypeConfig<NzFormlyUploaderProps>
> {
  handleChange(event: NzUploadChangeParam): void {
    if (this.props.nzChange) this.props.nzChange(event);
  }
}
