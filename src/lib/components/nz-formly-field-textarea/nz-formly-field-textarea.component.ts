import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyTextareaProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "",
  templateUrl: "./nz-formly-field-textarea.component.html",
  styleUrls: ["./nz-formly-field-textarea.component.scss"],
})
export class NzFormlyFieldTextareaComponent extends FieldType<
  FieldTypeConfig<NzFormlyTextareaProps>
> {
  get fieldID() {
    return "control-" + this.field.key;
  }
}
