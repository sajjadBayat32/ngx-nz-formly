import { FormlyFieldConfig } from "@ngx-formly/core";
import {
  FormlyCheckboxProps,
  FormlyInputProps,
  FormlySwitchProps,
} from "./formly-props.model";

export class FormlyFieldBuilder<TModel> {
  input(
    key: FormlyKeyValue<TModel, string>,
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
}

type FormlyKeyValue<TModel, ControlType> = {
  [K in keyof TModel]: TModel[K] extends ControlType | null | undefined
    ? K & string
    : never;
}[keyof TModel];
