import { AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export type validatorNames = {
  [key in 'required' | 'minLength' | 'maxLength']?: boolean;
};

export function minLengthValidator(
  control: AbstractControl,
  field: FormlyFieldConfig
): validatorNames | null {
  if (field.props?.minLength)
    return control.value?.length < field.props?.minLength
      ? null
      : { minLength: true };
  return null;
}

export function minLengthMessage(field: FormlyFieldConfig) {
  return `${field.name} must be at least ${field.props?.minLength} characters`;
}

export function maxLengthValidator(
  control: AbstractControl,
  field: FormlyFieldConfig
): validatorNames | null {
  if (field.props?.maxLength)
    return control.value?.length > field.props?.maxLength
      ? null
      : { maxLength: true };
  return null;
}

export function maxLengthMessage(field: FormlyFieldConfig) {
  return `${field.name} must be at most ${field.props?.maxLength} characters`;
}
