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
> {}