import { NgModule } from "@angular/core";
import { NzFormlyFieldInputComponent } from "./components/nz-formly-field-input/nz-formly-field-input.component";
import { NzFormlyFieldCheckboxComponent } from "./components/nz-formly-field-checkbox/nz-formly-field-checkbox.component";
import { NzFormlyButtonComponent } from "./components/nz-formly-button/nz-formly-button.component";
import { NzFormlyFieldSelectComponent } from "./components/nz-formly-field-select/nz-formly-field-select.component";
import { NzFormlyFieldSwitchComponent } from "./components/nz-formly-field-switch/nz-formly-field-switch.component";
import { NzFormlyFieldRadioComponent } from "./components/nz-formly-field-radio/nz-formly-field-radio.component";
import { NzFormlyLabelWrapperComponent } from "./wrappers/nz-formly-label-wrapper/nz-formly-label-wrapper.component";
import { NzFormlyDefaultWrapperComponent } from "./wrappers/nz-formly-default-wrapper/nz-formly-default-wrapper.component";
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
      component: NzFormlyFieldInputComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyInputProps>>{
        props: {
          nzSize: "default",
          labelPosition: "inline",
          mask: "",
          thousandSeparator: "",
          showError: true,
        },
      },
    },
    {
      name: "checkbox",
      component: NzFormlyFieldCheckboxComponent,
      wrappers: ["default-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyCheckboxProps>>{
        props: {
          disabled: false,
          nzAutoFocus: false,
          showError: true,
        },
      },
    },
    {
      name: "switch",
      component: NzFormlyFieldSwitchComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlySwitchProps>>{
        props: {
          labelPosition: "inline",
          disabled: false,
          nzSize: "default",
          nzLoading: false,
          showError: true,
        },
      },
    },
    {
      name: "radio",
      component: NzFormlyFieldRadioComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyRadioProps>>{
        props: {
          labelPosition: "inline",
          disabled: false,
          nzSize: "default",
          nzType: "nz-radio",
          showError: true,
        },
      },
    },
    {
      name: "select",
      component: NzFormlyFieldSelectComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlySelectProps>>{
        props: {
          objectValue: false,
          labelPosition: "inline",
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
          showError: true,
          nzFilterOption: () => true,
          compareWith: (o1: any, o2: any) => o1 === o2,
          nzOpenChange: () => {},
          nzScrollToBottom: () => {},
          nzOnSearch: () => {},
        },
      },
    },
    {
      name: "button",
      component: NzFormlyButtonComponent,
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
          click: () => {},
        },
      },
    },
  ],
  wrappers: [
    {
      name: "default-wrapper",
      component: NzFormlyDefaultWrapperComponent,
    },
    {
      name: "label-wrapper",
      component: NzFormlyLabelWrapperComponent,
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
    NzFormlyFieldInputComponent,
    NzFormlyFieldCheckboxComponent,
    NzFormlyFieldSwitchComponent,
    NzFormlyFieldSelectComponent,
    NzFormlyButtonComponent,
    NzFormlyFieldRadioComponent,
    NzFormlyLabelWrapperComponent,
    NzFormlyDefaultWrapperComponent,
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
class NgxNzFormlyModule {}
