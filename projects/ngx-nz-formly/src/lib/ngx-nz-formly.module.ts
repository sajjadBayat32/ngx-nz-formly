import { NgModule } from "@angular/core";
import { FormlyFieldInputComponent } from "./components/formly-field-input/formly-field-input.component";
import { FormlyFieldCheckboxComponent } from "./components/formly-field-checkbox/formly-field-checkbox.component";
import { FormlyButtonComponent } from "./components/formly-button/formly-button.component";
import { FormlyFieldSelectComponent } from "./components/formly-field-select/formly-field-select.component";
import { FormlyFieldSwitchComponent } from "./components/formly-field-switch/formly-field-switch.component";
import { FormlyFieldRadioComponent } from "./components/formly-field-radio/formly-field-radio.component";
import { FormlyLabelWrapperComponent } from "./wrappers/formly-label-wrapper/formly-label-wrapper.component";
import { FormlyDefaultWrapperComponent } from "./wrappers/formly-default-wrapper/formly-default-wrapper.component";
import {
  ConfigOption,
  FormlyFieldConfig,
  FormlyModule,
} from "@ngx-formly/core";
import {
  NzFormlyButtonProps,
  NzFormlyCheckboxProps,
  NzFormlyInputProps,
  NzFormlyRadioProps,
  NzFormlySelectProps,
  NzFormlySwitchProps,
} from "./ngx-nz-formly-props.model";
import {
  AbstractControl,
  ReactiveFormsModule,
  RequiredValidator,
} from "@angular/forms";
import {
  emailValidator,
  maxLengthMessage,
  maxLengthValidator,
  maxValueMessage,
  maxValueValidator,
  minLengthMessage,
  minLengthValidator,
  minValueMessage,
  minValueValidator,
  passwordValidator,
} from "./ngx-nz-formly-validators";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { CommonModule } from "@angular/common";
import { NgxMaskModule } from "ngx-mask";

export const NzFormlyForRoot: ConfigOption = {
  types: [
    {
      name: "input",
      component: FormlyFieldInputComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyInputProps>>{
        props: {
          nzSize: "default",
          labelPosition: "Left",
          mask: "",
          thousandSeparator: "",
        },
      },
    },
    {
      name: "checkbox",
      component: FormlyFieldCheckboxComponent,
      wrappers: [],
      defaultOptions: <FormlyFieldConfig<NzFormlyCheckboxProps>>{
        props: {
          disabled: false,
          nzAutoFocus: false,
        },
      },
    },
    {
      name: "switch",
      component: FormlyFieldSwitchComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlySwitchProps>>{
        props: {
          labelPosition: "Left",
          disabled: false,
          nzSize: "default",
          nzLoading: false,
        },
      },
    },
    {
      name: "radio",
      component: FormlyFieldRadioComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyRadioProps>>{
        props: {
          labelPosition: "Left",
          disabled: false,
          nzSize: "default",
          nzType: "nz-radio",
        },
      },
    },
    {
      name: "select",
      component: FormlyFieldSelectComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlySelectProps>>{
        props: {
          objectValue: false,
          labelPosition: "Left",
          compareWith: (o1: any, o2: any) => o1 === o2,
          nzAutoClearSearchValue: true,
          nzAllowClear: false,
          nzBorderless: false,
          nzOpen: false,
          nzAutoFocus: false,
          disabled: false,
          nzDropdownMatchSelectWidth: true,
          nzServerSearch: false,
          nzMaxMultipleCount: Infinity,
          nzMode: "default",
          nzNotFoundContent: "Not Found",
          nzShowSearch: false,
          nzSize: "default",
          nzTokenSeparators: [],
          nzLoading: false,
          nzOptionHeightPx: 32,
          nzOptionOverflowSize: 8,
          nzSelectOnTab: false,
        },
      },
    },
    {
      name: "button",
      component: FormlyButtonComponent,
      wrappers: ["default-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyButtonProps>>{
        props: {
          text: "",
          disabled: false,
          nzGhost: false,
          nzLoading: false,
          nzSize: "default",
          nzBlock: false,
          nzDanger: false,
          classList: "",
        },
      },
    },
  ],
  wrappers: [
    {
      name: "default-wrapper",
      component: FormlyDefaultWrapperComponent,
    },
    {
      name: "label-wrapper",
      component: FormlyLabelWrapperComponent,
    },
  ],
  validators: [
    {
      name: "required",
      validation: () => RequiredValidator,
    },
    {
      name: "minLen",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        minLengthValidator(c, f),
    },
    {
      name: "maxLen",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        maxLengthValidator(c, f),
    },
    {
      name: "minValue",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        minValueValidator(c, f),
    },
    {
      name: "maxValue",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        maxValueValidator(c, f),
    },
    {
      name: "email",
      validation: (c: AbstractControl) => emailValidator(c),
    },
    {
      name: "password",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        passwordValidator(c, f),
    },
  ],
  validationMessages: [
    {
      name: "required",
      message: "This field is required",
    },
    {
      name: "minLen",
      message: (err: any, f: FormlyFieldConfig) => minLengthMessage(f),
    },
    {
      name: "maxLen",
      message: (err: any, f: FormlyFieldConfig) => maxLengthMessage(f),
    },
    {
      name: "minValue",
      message: (err: any, f: FormlyFieldConfig) => minValueMessage(f),
    },
    {
      name: "maxValue",
      message: (err: any, f: FormlyFieldConfig) => maxValueMessage(f),
    },
    {
      name: "email",
      message: "Email format is not correct",
    },
    {
      name: "password",
      message:
        "Password should be at least 8 characters, including one capital letter, one number and one special character",
    },
    {
      name: "mask",
      message: "Invalid data",
    },
  ],
};

@NgModule({
  declarations: [
    FormlyFieldInputComponent,
    FormlyFieldCheckboxComponent,
    FormlyFieldSwitchComponent,
    FormlyFieldSelectComponent,
    FormlyButtonComponent,
    FormlyFieldRadioComponent,
    FormlyLabelWrapperComponent,
    FormlyDefaultWrapperComponent
  ],
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    NgxMaskModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzInputNumberModule,
    NzSelectModule,
    NzRadioModule,
  ],
  exports: [],
})
export class NgxNzFormlyModule {}
