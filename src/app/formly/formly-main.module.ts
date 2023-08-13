import { NgModule } from "@angular/core";
import { FormlyFieldInputComponent } from "./components/formly-field-input/formly-field-input.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import {
  ConfigOption,
  FormlyFieldConfig,
  FormlyModule,
} from "@ngx-formly/core";
import { FormlyLabelWrapperComponent } from "./wrappers/formly-label-wrapper/formly-label-wrapper.component";
import { CommonModule } from "@angular/common";
import {
  FormlyCheckboxProps,
  FormlyInputProps,
  FormlyNumberProps,
  FormlySelectProps,
  FormlySwitchProps,
} from "./formly-props.model";
import { FormlyDefaultWrapperComponent } from "./wrappers/formly-default-wrapper/formly-default-wrapper.component";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  AbstractControl,
  ReactiveFormsModule,
  RequiredValidator,
} from "@angular/forms";
import {
  maxLengthMessage,
  minLengthMessage,
  maxLengthValidator,
  minLengthValidator,
  emailValidator,
  passwordValidator,
} from "./formly-validators";
import { NgxMaskModule } from "ngx-mask";
import { FormlyFieldCheckboxComponent } from "./components/formly-field-checkbox/formly-field-checkbox.component";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { FormlyFieldSwitchComponent } from "./components/formly-field-switch/formly-field-switch.component";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { FormlyFieldNumberComponent } from "./components/formly-field-number/formly-field-number.component";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { FormlyFieldSelectComponent } from "./components/formly-field-select/formly-field-select.component";
import { NzSelectModule } from "ng-zorro-antd/select";

export const FormlyForRoot: ConfigOption = {
  types: [
    {
      name: "input",
      component: FormlyFieldInputComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<FormlyInputProps>>{
        props: {
          nzSize: "default",
          labelPosition: "Left",
        },
      },
    },
    {
      name: "number",
      component: FormlyFieldNumberComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<FormlyNumberProps>>{
        props: {
          labelPosition: "Left",
          nzSize: "default",
          nzBorderless: false,
          nzPrecision: 0,
          nzMax: Infinity,
          nzMin: -Infinity,
          nzPrecisionMode: "cut",
        },
      },
    },
    {
      name: "checkbox",
      component: FormlyFieldCheckboxComponent,
      wrappers: [],
      defaultOptions: <FormlyFieldConfig<FormlyCheckboxProps>>{
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
      defaultOptions: <FormlyFieldConfig<FormlySwitchProps>>{
        props: {
          disabled: false,
          nzSize: "default",
          nzLoading: false,
        },
      },
    },
    {
      name: "select",
      component: FormlyFieldSelectComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<FormlySelectProps>>{
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
      name: "minLength",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        minLengthValidator(c, f),
    },
    {
      name: "maxLength",
      validation: (c: AbstractControl, f: FormlyFieldConfig) =>
        maxLengthValidator(c, f),
    },
    {
      name: "email",
      validation: (c: AbstractControl) => emailValidator(c),
    },
    {
      name: "password",
      validation: (c: AbstractControl) => passwordValidator(c),
    },
  ],
  validationMessages: [
    {
      name: "required",
      message: "This field is required",
    },
    {
      name: "minLength",
      message: (err: any, f: FormlyFieldConfig) => minLengthMessage(f),
    },
    {
      name: "maxLength",
      message: (err: any, f: FormlyFieldConfig) => maxLengthMessage(f),
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
    FormlyLabelWrapperComponent,
    FormlyDefaultWrapperComponent,
    FormlyFieldCheckboxComponent,
    FormlyFieldSwitchComponent,
    FormlyFieldNumberComponent,
    FormlyFieldSelectComponent,
  ],
  imports: [
    NzInputModule,
    NzButtonModule,
    CommonModule,
    NzIconModule,
    ReactiveFormsModule,
    FormlyModule,
    NgxMaskModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzInputNumberModule,
    NzSelectModule,
  ],
})
export class FormlyMainModule {}
