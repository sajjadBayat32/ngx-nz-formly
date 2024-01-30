import { FormlyFieldConfig } from "@ngx-formly/core";
import {
  NzFormlyButtonProps,
  NzFormlyCheckboxProps,
  NzFormlyInputProps,
  NzFormlyRadioProps,
  NzFormlySelectProps,
  NzFormlySwitchProps,
} from "./ngx-nz-formly-props.model";
import { FormControl } from "@angular/forms";

export class NzFormlyFieldBuilder<TModel> {
  input(
    key: FormlyKeyValue<TModel, string | number>,
    configOverrides: FormlyFieldConfig<NzFormlyInputProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "input",
      ...configOverrides,
    };
  }

  checkbox(
    key: FormlyKeyValue<TModel, boolean>,
    configOverrides: FormlyFieldConfig<NzFormlyCheckboxProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "checkbox",
      ...configOverrides,
    };
  }

  switch(
    key: FormlyKeyValue<TModel, boolean>,
    configOverrides: FormlyFieldConfig<NzFormlySwitchProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "switch",
      ...configOverrides,
    };
  }

  radio(
    key: FormlyKeyValue<TModel, any>,
    configOverrides: FormlyFieldConfig<NzFormlyRadioProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "radio",
      ...configOverrides,
    };
  }

  select(
    key: FormlyKeyValue<TModel, any>,
    configOverrides: FormlyFieldConfig<NzFormlySelectProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "select",
      ...configOverrides,
    };
  }

  button(
    configOverrides: FormlyFieldConfig<NzFormlyButtonProps>,
  ): FormlyFieldConfig {
    return {
      type: "button",
      ...configOverrides,
    };
  }
}

type FormlyKeyValue<TModel, ControlType> = {
  [K in keyof TModel]: TModel[K] extends ControlType | null | undefined
    ? K & string
    : never;
}[keyof TModel];

export type IForm<T> = {
  [K in keyof T]?: FormControl<T[K]>;
};
