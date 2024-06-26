import { FormlyAttributeEvent } from "@ngx-formly/core/lib/models/fieldconfig";
import { EventEmitter, TemplateRef } from "@angular/core";
import {
  NzSafeAny,
  NzSizeDSType,
  NzSizeLDSType,
  NzStatus,
} from "ng-zorro-antd/core/types";
import { Observable, Subscription } from "rxjs";
import { NzOptionComponent, NzSelectPlacementType } from "ng-zorro-antd/select";
import { NzSelectModeType } from "ng-zorro-antd/select/select.types";
import { NzButtonShape, NzButtonType } from "ng-zorro-antd/button";
import { NzRadioButtonStyle } from "ng-zorro-antd/radio";
import { NzMarks, NzSliderShowTooltip } from "ng-zorro-antd/slider";
import {
  NzUploadChangeParam,
  NzUploadFile,
  NzUploadXHRArgs,
} from "ng-zorro-antd/upload";
import { NzDateMode, NzDatePickerSizeType } from "ng-zorro-antd/date-picker";
import { NzPlacement } from "ng-zorro-antd/date-picker/date-picker.component";

enum InputMask {
  PHONE = "phone",
}

export interface NzFormlyCommonProps {
  nzDisabled?: boolean;
  nzHidden?: boolean;
  nzPlaceholder?: string;
  nzReadonly?: boolean;
  label?: string;
  labelObs?: Observable<string>;
  labelPosition?: "inline" | "top" | "float";
  required?: boolean;
  showError?: boolean;
  keyup?: FormlyAttributeEvent;
  keydown?: FormlyAttributeEvent;
  keypress?: FormlyAttributeEvent;
  click?: FormlyAttributeEvent;
  focus?: FormlyAttributeEvent;
  blur?: FormlyAttributeEvent;
  change?: FormlyAttributeEvent;
  styles?: {
    /**@deprecated*/
    labelClass?: string;
    labelWidth?: string;
    fieldClass?: string;
    /**@deprecated*/
    wrapperClass?: string;
  };
}

// extends FormlyFieldProps

export interface NzFormlyInputProps extends NzFormlyCommonProps {
  mask?: InputMask | string;
  thousandSeparator?: string;
  minLen?: number;
  maxLen?: number;
  minValue?: number;
  maxValue?: number;
  nzBorderless?: boolean;
  nzStatus?: NzStatus;
  type?: string;
  // for nz-input-group
  nzAddOnAfter?: string | TemplateRef<void>;
  nzAddOnBefore?: string | TemplateRef<void>;
  nzAddOnAfterIcon?: string;
  nzAddOnBeforeIcon?: string;
  nzPrefix?: string | TemplateRef<void>;
  nzSuffix?: string | TemplateRef<void>;
  nzSize?: NzSizeLDSType;
}

export interface NzFormlyTextareaProps extends NzFormlyCommonProps {
  rows?: number;
  nzBorderless?: boolean;
  showTextAreaCount?: boolean;
  maxCount?: number;
}

export interface NzFormlyCheckboxProps extends NzFormlyCommonProps {
  hasSelectAll?: boolean;
  isGroup?: boolean;
}

export interface NzFormlySwitchProps extends NzFormlyCommonProps {
  nzCheckedChildren?: string | TemplateRef<void>;
  nzUnCheckedChildren?: string | TemplateRef<void>;
  nzLoading?: boolean;
  nzSize?: NzSizeDSType;
}

export interface NzFormlyRadioProps extends NzFormlyCommonProps {
  nzOptions: NzRadioOptionType[];
  nzName?: string;
  nzSize?: NzSizeDSType;
  nzType?: "nz-radio" | "nz-radio-button";
  nzButtonStyle?: NzRadioButtonStyle;
}

export interface NzFormlySelectProps extends NzFormlyCommonProps {
  objectValue?: boolean;
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
  nzOptions?: NzSelectOptionType[];
  nzOptionsObs?: Observable<NzSelectOptionType[]>;
  nzMaxTagPlaceholder?: TemplateRef<{ $implicit: any[] }>;
  nzOptionHeightPx?: number;
  nzOptionOverflowSize?: number;
  nzSelectOnTab?: boolean;
  nzFilterOption?: (input?: string, option?: NzOptionComponent) => boolean;
  compareWith?: (o1: any, o2: any) => boolean;
  nzOpenChange?: (event: boolean) => void;
  nzScrollToBottom?: () => void;
  nzOnSearch?: (event: string) => void;
}

export interface NzFormlySliderProps extends NzFormlyCommonProps {
  nzDots?: boolean;
  nzIncluded?: boolean;
  nzMarks?: NzMarks;
  nzMax?: number;
  nzMin?: number;
  nzRange?: boolean;
  nzStep?: number;
  nzTipFormatter?: (value: number) => string;
  nzVertical?: boolean;
  nzReverse?: boolean;
  nzTooltipVisible?: NzSliderShowTooltip;
  nzTooltipPlacement?: string;
  nzOnAfterChange?: FormlyAttributeEvent;
}

type NzSelectOptionType = {
  label: string | number;
  value: NzSafeAny;
  disabled?: boolean;
  hide?: boolean;
  nzCustomContent?: string | TemplateRef<NzSafeAny>;
};

type NzRadioOptionType = {
  value: NzSafeAny;
  disabled?: boolean;
  label: string | number;
  nzCustomContent?: string | TemplateRef<NzSafeAny>;
};

export interface NzFormlyButtonProps {
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

export interface NzFormlyUploaderProps {
  label: string;
  hint?: string;
  multiple?: boolean;
  uploadUrl?: string | ((file: NzUploadFile) => string | Observable<string>);
  uploadHeaders?: object | ((file: NzUploadFile) => object | Observable<any>);
  customRequest?: (item: NzUploadXHRArgs) => Subscription;
  nzDownload?: (file: NzUploadFile) => void;
  nzChange?: (event: NzUploadChangeParam) => void;
  /*options will be added soon*/
}

export interface NzFormlyDatePickerCommonProps extends NzFormlyCommonProps {
  nzId?: string;
  nzAllowClear?: boolean;
  nzAutoFocus?: boolean;
  nzBackdrop?: boolean;
  nzDefaultPickerValue?: Date;
  nzDisabledDate?: (current: Date) => boolean;
  nzDropdownClassName?: string;
  nzFormat?: string;
  nzLocale?: object;
  nzMode?: NzDateMode;
  nzPopupStyle?: object;
  nzRenderExtraFooter?:
    | TemplateRef<any>
    | string
    | (() => TemplateRef<any> | string);
  nzSize?: NzDatePickerSizeType;
  nzStatus?: NzStatus;
  nzPlacement?: NzPlacement;
  nzSuffixIcon?: string;
  nzBorderless?: boolean;
  nzInline?: boolean;
  nzOnOpenChange?: EventEmitter<boolean>;
}

export interface NzFormlyDatePickerProps extends NzFormlyDatePickerCommonProps {
  nzDateRender?:
    | TemplateRef<Date>
    | string
    | ((d: Date) => TemplateRef<Date> | string);
  nzDisabledTime?: (current: Date) => {
    nzDisabledHours: any;
    nzDisabledMinutes: any;
    nzDisabledSeconds: any;
  };
  nzShowTime?: object | boolean;
  nzShowToday?: boolean;
  nzShowNow?: boolean;
  nzShowWeekNumber?: boolean;
  nzOnOk?: EventEmitter<Date>;
}

export interface NzFormlyRangePickerProps
  extends NzFormlyDatePickerCommonProps {
  nzRanges: { [key: string]: Date[] } | { [key: string]: () => Date[] };
  nzSeparator: string | TemplateRef<any>;
  nzOnCalendarChange: EventEmitter<Date[]>;
  nzShowTime: object | boolean;
  nzDisabledTime: (
    current: Date,
    partial: "start" | "end",
  ) => {
    nzDisabledHours: any;
    nzDisabledMinutes: any;
    nzDisabledSeconds: any;
  };
  nzShowWeekNumber: boolean;
  nzOnOk: EventEmitter<Date[]>;
}
