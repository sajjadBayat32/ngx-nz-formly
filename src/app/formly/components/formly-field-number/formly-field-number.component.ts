import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyNumberProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-field-number",
  templateUrl: "./formly-field-number.component.html",
  styleUrls: ["./formly-field-number.component.css"],
})
export class FormlyFieldNumberComponent extends FieldType<
  FieldTypeConfig<FormlyNumberProps>
> {}
