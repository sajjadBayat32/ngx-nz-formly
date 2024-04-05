import { ConfigOption, FormlyFieldConfig } from "@ngx-formly/core";
import { AbstractControl, RequiredValidator } from "@angular/forms";
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
  NzFormlyButtonProps,
  NzFormlyCheckboxProps,
  NzFormlyDatePickerProps,
  NzFormlyInputProps,
  NzFormlyRadioProps,
  NzFormlySelectProps,
  NzFormlySliderProps,
  NzFormlySwitchProps,
  NzFormlyTextareaProps,
  NzFormlyUploaderProps,
  passwordValidator,
} from "@segalino-front/ngx-nz-formly";
import {
  NzFormlyButtonComponent,
  NzFormlyFieldCheckboxComponent,
  NzFormlyFieldDatePickerComponent,
  NzFormlyFieldInputComponent,
  NzFormlyFieldRadioComponent,
  NzFormlyFieldSelectComponent,
  NzFormlyFieldSliderComponent,
  NzFormlyFieldSwitchComponent,
  NzFormlyFieldTextareaComponent,
  NzFormlyUploaderComponent,
} from "./components";
import {
  NzFormlyDefaultWrapperComponent,
  NzFormlyLabelWrapperComponent,
} from "./wrappers";

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
          nzPlaceholder: "",
        },
      },
    },
    {
      name: "textarea",
      component: NzFormlyFieldTextareaComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyTextareaProps>>{
        props: {
          labelPosition: "inline",
          rows: 4,
          showError: true,
          nzPlaceholder: "",
        },
      },
    },
    {
      name: "checkbox",
      component: NzFormlyFieldCheckboxComponent,
      wrappers: ["default-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyCheckboxProps>>{
        props: {
          nzDisabled: false,
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
          nzDisabled: false,
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
          nzDisabled: false,
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
          nzDisabled: false,
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
          nzPlaceholder: "",
          nzFilterOption: () => true,
          compareWith: (o1: any, o2: any) => o1 === o2,
          nzOpenChange: () => {},
          nzScrollToBottom: () => {},
          nzOnSearch: () => {},
        },
      },
    },
    {
      name: "slider",
      component: NzFormlyFieldSliderComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlySliderProps>>{
        props: {
          labelPosition: "inline",
          nzDots: false,
          nzIncluded: true,
          nzMarks: {},
          nzMax: 100,
          nzMin: 0,
          nzRange: false,
          nzStep: 1,
          nzTipFormatter: (value: number) => String(value),
          nzVertical: false,
          nzReverse: false,
          nzTooltipVisible: "default",
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
    {
      name: "uploader",
      component: NzFormlyUploaderComponent,
      wrappers: ["default-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyUploaderProps>>{
        props: {
          multiple: true,
        },
      },
    },
    {
      name: "datePicker",
      component: NzFormlyFieldDatePickerComponent,
      wrappers: ["default-wrapper", "label-wrapper"],
      defaultOptions: <FormlyFieldConfig<NzFormlyDatePickerProps>>{
        props: {
          labelPosition: "inline",
          nzPlaceholder: "",
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
