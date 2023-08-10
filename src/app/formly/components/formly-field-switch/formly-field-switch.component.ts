import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlySwitchProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-field-switch",
  templateUrl: "./formly-field-switch.component.html",
  styleUrls: ["./formly-field-switch.component.scss"],
})
export class FormlyFieldSwitchComponent extends FieldType<
  FieldTypeConfig<FormlySwitchProps>
> {
  get fieldID() {
    return "control-" + this.field.key;
  }
}
