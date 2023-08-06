import { AbstractControl } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export type validatorNames = {
  [key in "required" | "minLength" | "maxLength" | "email" | "password"]?: boolean;
};

export function minLengthValidator(
  control: AbstractControl,
  field: FormlyFieldConfig,
): validatorNames | null {
  if (field.props?.minLength)
    return control.value?.length < field.props?.minLength ? null : { minLength: true };
  return null;
}

export function minLengthMessage(field: FormlyFieldConfig) {
  return `Field must be at least ${field.props?.minLength} characters`;
}

export function maxLengthValidator(
  control: AbstractControl,
  field: FormlyFieldConfig,
): validatorNames | null {
  if (field.props?.maxLength)
    return control.value?.length > field.props?.maxLength ? null : { maxLength: true };
  return null;
}

export function maxLengthMessage(field: FormlyFieldConfig) {
  return `Field must be at most ${field.props?.maxLength} characters`;
}

export function emailValidator(control: AbstractControl): validatorNames | null {
  let REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return REGEX.test(control.value) ? null : { email: true };
}

export function passwordValidator(control: AbstractControl): validatorNames | null {
  let REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  return REGEX.test(control.value) ? null : { password: true };
}
