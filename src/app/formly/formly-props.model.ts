import { FormlyAttributeEvent } from "@ngx-formly/core/lib/models/fieldconfig";
import { TemplateRef } from "@angular/core";
import {
  NzSafeAny,
  NzSizeDSType,
  NzSizeLDSType,
  NzStatus,
} from "ng-zorro-antd/core/types";
import { Observable } from "rxjs";
import { NzOptionComponent, NzSelectPlacementType } from "ng-zorro-antd/select";
import { NzSelectModeType } from "ng-zorro-antd/select/select.types";
import { NzButtonShape, NzButtonType } from "ng-zorro-antd/button";

export type FormlyCustomFieldProps = FormlyInputProps | FormlyCheckboxProps;

enum InputMask {
  PHONE = "phone",
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
  keyup?: FormlyAttributeEvent;
  keydown?: FormlyAttributeEvent;
  keypress?: FormlyAttributeEvent;
  click?: FormlyAttributeEvent;
  focus?: FormlyAttributeEvent;
  blur?: FormlyAttributeEvent;
  change?: FormlyAttributeEvent;
  styles?: {
    labelClass?: string;
    labelWidth?: string;
    fieldClass?: string;
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

export interface FormlySelectProps extends FormlyCommonProps {
  objectValue?: boolean;
  compareWith?: (o1: any, o2: any) => boolean;
  nzAutoClearSearchValue?: boolean;
  nzAllowClear?: boolean;
  nzBorderless?: boolean;
  nzOpen?: boolean;
  nzAutoFocus?: boolean; // does it really work
  nzDropdownClassName?: string | string[];
  nzDropdownMatchSelectWidth?: boolean;
  nzDropdownStyle?: {
    [key: string]: string;
  };
  nzCustomTemplate?: TemplateRef<{ $implicit: NzOptionComponent }>;
  nzServerSearch?: boolean;
  nzFilterOption?: (input?: string, option?: NzOptionComponent) => boolean;
  nzMaxMultipleCount?: number;
  nzMode?: NzSelectModeType;
  nzNotFoundContent?: string | TemplateRef<void>;
  nzPlacement?: NzSelectPlacementType;
  nzShowArrow?: boolean;
  nzShowSearch?: boolean;
  nzSize?: NzSizeLDSType;
  nzStatus?: NzStatus;
  nzSuffixIcon?: TemplateRef<any> | string; // does it really work
  nzRemoveIcon?: TemplateRef<any>; // does it really work
  nzClearIcon?: TemplateRef<any>; // does it really work
  nzMenuItemSelectedIcon?: TemplateRef<any>; // does it really work
  nzTokenSeparators?: string[];
  nzLoading?: boolean;
  nzLoadingObs?: Observable<boolean>;
  nzMaxTagCount?: number; // does it really work
  nzOptions?: nzOptionType[];
  nzOptionsObs?: Observable<nzOptionType[]>;
  nzMaxTagPlaceholder?: TemplateRef<{ $implicit: any[] }>;
  nzOptionHeightPx?: number;
  nzOptionOverflowSize?: number;
  nzSelectOnTab?: boolean;
  nzOpenChange?: (event: boolean) => void;
  nzScrollToBottom?: () => void;
  nzOnSearch?: (event: string) => void;
}

type nzOptionType = {
  label: string | number;
  value: NzSafeAny;
  disabled?: boolean;
  hide?: boolean;
  nzCustomContent?: string | TemplateRef<NzSafeAny>;
};

export interface FormlyButtonProps {
  text: string;
  disabled?: boolean;
  nzGhost?: boolean;
  nzLoading?: boolean;
  nzShape?: NzButtonShape;
  nzSize?: NzSizeLDSType;
  nzType?: NzButtonType;
  nzBlock?: boolean;
  nzDanger?: boolean;
  classList?: string;
  click?: () => void;
}
