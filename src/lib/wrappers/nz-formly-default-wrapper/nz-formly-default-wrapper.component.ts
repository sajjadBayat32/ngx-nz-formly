import { Component } from "@angular/core";
import { FieldTypeConfig, FieldWrapper } from "@ngx-formly/core";
import { NzFormlyCommonProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "app-nz-formly-default-wrapper",
  templateUrl: "./nz-formly-default-wrapper.component.html",
  styleUrls: ["./nz-formly-default-wrapper.component.scss"],
})
export class NzFormlyDefaultWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
