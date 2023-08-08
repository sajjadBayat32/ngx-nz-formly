import { NgModule } from "@angular/core";
import { FormlyFieldInputComponent } from "./components/formly-field-input/formly-field-input.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import {
  ConfigOption,
  FormlyFieldConfig,
  FormlyModule,
} from "@ngx-formly/core";
import { FormlyInputWrapperComponent } from "./wrappers/formly-input-wrapper/formly-input-wrapper.component";
import { CommonModule } from "@angular/common";
import { FormlyCheckboxProps, FormlyInputProps } from "./formly-props.model";
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

export const FormlyForRoot: ConfigOption = {
  types: [
    {
      name: "input",
      component: FormlyFieldInputComponent,
      wrappers: ["default-wrapper", "input-wrapper"],
      defaultOptions: <FormlyFieldConfig<FormlyInputProps>>{
        props: {
          nzSize: "default",
          labelPosition: "Left",
        },
      },
    },
    {
      name: "checkbox",
      component: FormlyFieldCheckboxComponent,
      wrappers: [],
      defaultOptions: <FormlyFieldConfig<FormlyCheckboxProps>>{
        props: {
          labelPosition: "Left",
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
      name: "input-wrapper",
      component: FormlyInputWrapperComponent,
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
    FormlyInputWrapperComponent,
    FormlyDefaultWrapperComponent,
    FormlyFieldCheckboxComponent,
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
  ],
})
export class FormlyMainModule {}
