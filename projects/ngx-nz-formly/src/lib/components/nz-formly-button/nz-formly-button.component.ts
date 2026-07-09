import { Component } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";
import { NzFormlyButtonProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "app-nz-formly-button",
  templateUrl: "./nz-formly-button.component.html",
  styleUrls: [],
})
export class NzFormlyButtonComponent extends FieldType<
  FormlyFieldConfig<NzFormlyButtonProps>
> {
  onClick() {
    if (typeof this.props?.click == "function") {
      this.props.click();
    }
  }
}
