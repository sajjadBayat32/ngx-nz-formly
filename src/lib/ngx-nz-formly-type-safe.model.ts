import { FormlyFieldConfig } from "@ngx-formly/core";
import {
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
} from "./ngx-nz-formly-props.model";
import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
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

  textarea(
    key: FormlyKeyValue<TModel, string>,
    configOverrides: FormlyFieldConfig<NzFormlyTextareaProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "textarea",
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

  slider(
    key: FormlyKeyValue<TModel, number | [number, number]>,
    configOverrides: FormlyFieldConfig<NzFormlySliderProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "slider",
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

  uploader(
    configOverrides: FormlyFieldConfig<NzFormlyUploaderProps>,
  ): FormlyFieldConfig {
    return {
      type: "uploader",
      ...configOverrides,
    };
  }

  datePicker(
    key: FormlyKeyValue<TModel, Date | [Date, Date]>,
    configOverrides: FormlyFieldConfig<NzFormlyDatePickerProps>,
  ): FormlyFieldConfig {
    return {
      key,
      type: "datePicker",
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
