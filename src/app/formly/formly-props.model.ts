import { FormlyAttributeEvent } from "@ngx-formly/core/lib/models/fieldconfig";
import { TemplateRef } from "@angular/core";
import {
  NzSizeDSType,
  NzSizeLDSType,
  NzStatus,
} from "ng-zorro-antd/core/types";
import { Observable } from "rxjs";
import { FormlyFieldProps } from "@ngx-formly/ng-zorro-antd/form-field";

export type FormlyCustomFieldProps = FormlyInputProps | FormlyCheckboxProps;

enum InputMask {
  PHONE = "phone",
  CURRENCY = "currency",
}

export interface FormlyCommonProps {
  disabled?: boolean;
  hidden?: boolean;
  label?: string;
  labelObs?: Observable<string>;
  labelPosition?: "Top" | "Left";
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  focus?: FormlyAttributeEvent;
  blur?: FormlyAttributeEvent;
  keyup?: FormlyAttributeEvent;
  keydown?: FormlyAttributeEvent;
  click?: FormlyAttributeEvent;
  change?: FormlyAttributeEvent;
  keypress?: FormlyAttributeEvent;
  styles?: {
    labelClass?: string;
    fieldClass?: string;
    labelWidth?: string;
    wrapperClass?: string;
  };
}

// extends FormlyFieldProps

export interface FormlyInputProps extends FormlyCommonProps {
  mask?: InputMask | string;
  minLength?: number;
  maxLength?: number;
  nzBorderless?: boolean;
  nzStatus?: NzStatus;
  type?: "password" | "text";
  // for nz-input-group
  nzAddOnAfter?: string | TemplateRef<void>;
  nzAddOnBefore?: string | TemplateRef<void>;
  nzAddOnAfterIcon?: string;
  nzAddOnBeforeIcon?: string;
  nzPrefix?: string | TemplateRef<void>;
  nzSuffix?: string | TemplateRef<void>;
  nzSize?: NzSizeLDSType;
}

export interface FormlyNumberProps extends FormlyCommonProps {
  nzMax?: number;
  nzMin?: number;
  format?: "currency";
  // nzFormatter
  // nzParser
  nzPrecision?: number;
  nzPrecisionMode?:
    | "cut"
    | "toFixed"
    | ((value: number | string, precision?: number) => number);
  nzStatus?: NzStatus;
  // for nz-input-number-group
  nzAddOnAfter?: string | TemplateRef<void>;
  nzAddOnBefore?: string | TemplateRef<void>;
  nzAddOnAfterIcon?: string;
  nzAddOnBeforeIcon?: string;
  nzPrefix?: string | TemplateRef<void>;
  nzSuffix?: string | TemplateRef<void>;
  nzSize?: NzSizeLDSType;
}

export interface FormlyCheckboxProps extends FormlyCommonProps {
  hasSelectAll?: boolean;
  isGroup?: boolean;
}

export interface FormlySwitchProps extends FormlyCommonProps {
  nzCheckedChildren?: string | TemplateRef<void>;
  nzUnCheckedChildren?: string | TemplateRef<void>;
  nzLoading?: boolean;
  nzSize?: NzSizeDSType;
}
