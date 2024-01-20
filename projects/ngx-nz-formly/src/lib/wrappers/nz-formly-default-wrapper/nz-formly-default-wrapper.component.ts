import { Component } from "@angular/core";
import { FieldTypeConfig, FieldWrapper } from "@ngx-formly/core";
import { animate, style, transition, trigger } from "@angular/animations";
import { NzFormlyCommonProps } from "../../ngx-nz-formly-props.model";

@Component({
  selector: "app-nz-formly-default-wrapper",
  templateUrl: "./nz-formly-default-wrapper.component.html",
  styleUrls: ["./nz-formly-default-wrapper.component.scss"],
  animations: [
    trigger("myAnimation", [
      transition(":enter", [
        style({ bottom: "4px", opacity: 0 }),
        animate("100ms", style({ bottom: "0px", opacity: 1 })),
      ]),
      transition(":leave", [
        style({ bottom: "0px", opacity: 1 }),
        animate("100ms", style({ bottom: "4px", opacity: 0 })),
      ]),
    ]),
  ],
})
export class NzFormlyDefaultWrapperComponent extends FieldWrapper<
  FieldTypeConfig<NzFormlyCommonProps>
> {}
