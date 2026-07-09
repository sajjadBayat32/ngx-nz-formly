import { Component } from "@angular/core";
import { FieldTypeConfig, FieldWrapper } from "@ngx-formly/core";
import { NzFormlyCommonProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "app-nz-formly-default-wrapper",
  templateUrl: "./nz-formly-default-wrapper.component.html",
})
export class NzFormlyDefaultWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
