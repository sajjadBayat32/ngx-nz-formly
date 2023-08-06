import { FormlyFieldProps } from "@ngx-formly/core/lib/models/fieldconfig";
import { TemplateRef } from "@angular/core";
import { NzSizeLDSType, NzStatus } from "ng-zorro-antd/core/types";

export type FormlyCustomFieldProps = FormlyInputProps;

export interface FormlyInputProps extends FormlyFieldProps {
  nzAddOnAfter?: string | TemplateRef<void> | undefined;
  nzAddOnBefore?: string | TemplateRef<void> | undefined;
  nzBorderless?: boolean | undefined;
  nzPrefix?: string | TemplateRef<void> | undefined;
  nzSuffix?: string | TemplateRef<void> | undefined;
  nzSize?: NzSizeLDSType | undefined;
  nzStatus?: NzStatus | undefined;
  // custom props
  styles?: {
    labelClass?: string | undefined;
    fieldClass?: string | undefined;
    labelWidth?: string | undefined;
    wrapperClass?: string | undefined;
  };
  isPassword?: boolean | undefined;
  labelPosition?: "Top" | "Left";
}
