import { Component } from "@angular/core";
import { FieldTypeConfig, FieldWrapper } from "@ngx-formly/core";
import { NzFormlyCommonProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "app-nz-formly-label-wrapper",
  templateUrl: "./nz-formly-label-wrapper.component.html",
  styleUrls: ["./nz-formly-label-wrapper.component.scss"],
})
export class NzFormlyLabelWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
