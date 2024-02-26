import { Component } from "@angular/core";
import { NzFormlyDatePickerProps } from "@segalino-front/ngx-nz-formly";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";

@Component({
  selector: "app-nz-formly-field-date-picker",
  templateUrl: "./nz-formly-field-date-picker.component.html",
  styleUrl: "./nz-formly-field-date-picker.component.scss",
})
export class NzFormlyFieldDatePickerComponent extends FieldType<
  FieldTypeConfig<NzFormlyDatePickerProps>
> {}
