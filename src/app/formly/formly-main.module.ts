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
  FormlyButtonProps,
  FormlyCheckboxProps,
  FormlyInputProps,
  FormlyRadioProps,
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
  minLengthMessage,
  minLengthValidator,
  emailValidator,
  passwordValidator,
  minValueValidator,
  maxValueValidator,
  minValueMessage,
  maxValueMessage,
  maxLengthValidator,
  maxLengthMessage,
} from "./formly-validators";
import { NgxMaskModule } from "ngx-mask";
import { FormlyFieldCheckboxComponent } from "./components/formly-field-checkbox/formly-field-checkbox.component";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { FormlyFieldSwitchComponent } from "./components/formly-field-switch/formly-field-switch.component";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { FormlyFieldSelectComponent } from "./components/formly-field-select/formly-field-select.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormlyButtonComponent } from "./components/formly-button/formly-button.component";
import { FormlyFieldRadioComponent } from "./components/formly-field-radio/formly-field-radio.component";
import { NzRadioModule } from "ng-zorro-antd/radio";

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
          mask: "",
          thousandSeparator: "",
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
      defaultOptions: <FormlyFieldConfig<FormlyRadioProps>>{
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
    {
      name: "button",
      component: FormlyButtonComponent,
      wrappers: ["default-wrapper"],
      defaultOptions: <FormlyFieldConfig<FormlyButtonProps>>{
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
    FormlyLabelWrapperComponent,
    FormlyDefaultWrapperComponent,
    FormlyFieldCheckboxComponent,
    FormlyFieldSwitchComponent,
    FormlyFieldSelectComponent,
    FormlyButtonComponent,
    FormlyFieldRadioComponent,
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
    NzRadioModule,
  ],
})
export class FormlyMainModule {}
