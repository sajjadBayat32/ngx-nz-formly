import { Component } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
import { NzFormlyButtonProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "app-formly-button",
  templateUrl: "./formly-button.component.html",
  styleUrls: ["./formly-button.component.scss"],
})
export class FormlyButtonComponent extends FieldType<
  FormlyFieldConfig<NzFormlyButtonProps>
> {
  onClick() {
    if (typeof this.props?.click == "function") {
      this.props.click();
    }
  }
}
