import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyCheckboxProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-field-checkbox",
  templateUrl: "./formly-field-checkbox.component.html",
  styleUrls: ["./formly-field-checkbox.component.scss"],
})
export class FormlyFieldCheckboxComponent extends FieldType<
  FieldTypeConfig<FormlyCheckboxProps>
> {
  onChange(event: boolean) {
    if (typeof this.props?.change === "function") {
      this.props.change(this.field, event);
    }
  }

  get fieldID() {
    return "control-" + this.field.key;
  }
}
