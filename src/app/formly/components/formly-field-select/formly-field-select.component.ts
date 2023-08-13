import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlySelectProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-field-select",
  templateUrl: "./formly-field-select.component.html",
  styleUrls: ["./formly-field-select.component.scss"],
})
export class FormlyFieldSelectComponent extends FieldType<
  FieldTypeConfig<FormlySelectProps>
> {
  get fieldID() {
    return "control-" + this.field.key;
  }
}
