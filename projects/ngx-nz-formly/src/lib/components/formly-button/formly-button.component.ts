import { Component } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyButtonProps } from "../../formly-props.model";

@Component({
  selector: "app-formly-button",
  templateUrl: "./formly-button.component.html",
  styleUrls: ["./formly-button.component.scss"],
})
export class FormlyButtonComponent extends FieldType<
  FormlyFieldConfig<FormlyButtonProps>
> {
  onClick() {
    if (typeof this.props?.click == "function") {
      this.props.click();
    }
  }
}
