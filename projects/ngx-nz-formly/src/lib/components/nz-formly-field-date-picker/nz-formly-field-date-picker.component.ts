import { Component } from "@angular/core";
import { NzFormlyDatePickerProps } from "../../ngx-nz-formly-props.model";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";

@Component({
  selector: "app-nz-formly-field-date-picker",
  templateUrl: "./nz-formly-field-date-picker.component.html",
})
export class NzFormlyFieldDatePickerComponent extends FieldType<
  FieldTypeConfig<NzFormlyDatePickerProps>
> {}
