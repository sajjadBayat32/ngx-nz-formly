import { AbstractControl } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzFormlyInputProps } from "./ngx-nz-formly-props.model";

export type NzFormlyValidatorNames = {
  [key in
    | "required"
    | "minLen"
    | "maxLen"
    | "minValue"
    | "maxValue"
    | "email"
    | "password"]?: boolean;
};

export function minLengthValidator(
  control: AbstractControl,
  field: FormlyFieldConfig<NzFormlyInputProps>,
): NzFormlyValidatorNames | null {
  if (field.props?.minLen)
    return control.value?.length < field.props?.minLen
      ? { minLen: true }
      : null;
  return null;
}

export function minLengthMessage(field: FormlyFieldConfig<NzFormlyInputProps>) {
  return `Field must be at least ${field.props?.minLen} characters`;
}

export function maxLengthValidator(
  control: AbstractControl,
  field: FormlyFieldConfig<NzFormlyInputProps>,
): NzFormlyValidatorNames | null {
  if (field.props?.maxLen)
    return control.value?.length > field.props?.maxLen
      ? { maxLen: true }
      : null;
  return null;
}

export function maxLengthMessage(field: FormlyFieldConfig<NzFormlyInputProps>) {
  return `Field must be at most ${field.props?.maxLen} characters`;
}

export function minValueValidator(
  control: AbstractControl,
  field: FormlyFieldConfig<NzFormlyInputProps>,
): NzFormlyValidatorNames | null {
  if (field.props?.minValue && control.value != null)
    return Number(control.value) < field.props.minValue
      ? { minValue: false }
      : null;
  return null;
}

export function minValueMessage(field: FormlyFieldConfig<NzFormlyInputProps>) {
  return `Field value must be more than ${field.props?.minValue}`;
}

export function maxValueValidator(
  control: AbstractControl,
  field: FormlyFieldConfig<NzFormlyInputProps>,
): NzFormlyValidatorNames | null {
  if (field.props?.maxValue && control.value != null)
    return Number(control.value) > field.props.maxValue
      ? { maxValue: true }
      : null;
  return null;
}

export function maxValueMessage(field: FormlyFieldConfig<NzFormlyInputProps>) {
  return `Field value must be less than ${field.props?.maxValue}`;
}

export function emailValidator(
  control: AbstractControl,
): NzFormlyValidatorNames | null {
  let REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return REGEX.test(control.value) ? null : { email: true };
}

export function passwordValidator(
  control: AbstractControl,
  field: FormlyFieldConfig<NzFormlyInputProps>,
): NzFormlyValidatorNames | null {
  if (field.props?.type === "password") {
    let REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    return REGEX.test(control.value) ? null : { password: true };
  }
  return null;
}
