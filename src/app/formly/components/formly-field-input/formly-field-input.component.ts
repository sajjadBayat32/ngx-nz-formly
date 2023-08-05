import { Component, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyInputProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-field-input",
  templateUrl: "./formly-field-input.component.html",
  styleUrls: ["./formly-field-input.component.scss"],
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig<FormlyInputProps>> {
  changeShowPassword(input: any) {
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

  showPassword(input: any): boolean {
    return input.type === "text";
  }
}
