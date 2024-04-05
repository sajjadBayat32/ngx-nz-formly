import { Component } from "@angular/core";
import { FieldTypeConfig, FieldWrapper } from "@ngx-formly/core";
import { NzFormlyCommonProps } from "@segalino-front/ngx-nz-formly";

@Component({
  selector: "app-nz-formly-addons-wrapper",
  templateUrl: "./nz-formly-addon-wrapper.component.html",
  styleUrl: "./nz-formly-addon-wrapper.component.scss",
})
export class NzFormlyAddonWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
