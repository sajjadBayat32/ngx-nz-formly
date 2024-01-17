import { FormlyFieldConfig } from "@ngx-formly/core";
import {
  FormlyButtonProps,
  FormlyCheckboxProps,
  FormlyInputProps,
  FormlyRadioProps,
  FormlySelectProps,
  FormlySwitchProps,
} from "./formly-props.model";

export class FormlyFieldBuilder<TModel> {
  input(
    key: FormlyKeyValue<TModel, string | number>,
    configOverrides: FormlyFieldConfig<FormlyInputProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "input",
      ...configOverrides,
    };
  }

  checkbox(
    key: FormlyKeyValue<TModel, boolean>,
    configOverrides: FormlyFieldConfig<FormlyCheckboxProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "checkbox",
      ...configOverrides,
    };
  }

  switch(
    key: FormlyKeyValue<TModel, boolean>,
    configOverrides: FormlyFieldConfig<FormlySwitchProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "switch",
      ...configOverrides,
    };
  }

  radio(
    key: FormlyKeyValue<TModel, any>,
    configOverrides: FormlyFieldConfig<FormlyRadioProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "radio",
      ...configOverrides,
    };
  }

  select(
    key: FormlyKeyValue<TModel, any>,
    configOverrides: FormlyFieldConfig<FormlySelectProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "select",
      ...configOverrides,
    };
  }

  button(
    configOverrides: FormlyFieldConfig<FormlyButtonProps>,
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