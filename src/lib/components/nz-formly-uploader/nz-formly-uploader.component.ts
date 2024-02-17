import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyUploaderProps } from "../../ngx-nz-formly-props.model";
import {NzUploadChangeParam, NzUploadModule} from "ng-zorro-antd/upload";

@Component({
  selector: "app-nz-formly-uploader",
  templateUrl: "./nz-formly-uploader.component.html",
  styleUrl: "./nz-formly-uploader.component.scss",
})
export class NzFormlyUploaderComponent extends FieldType<
  FieldTypeConfig<NzFormlyUploaderProps>
> {
  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    console.log(file,fileList)
     }
}
