import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidiModule } from '@angular/cdk/bidi';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { NzFormlyDatePickerProps } from '../../ngx-nz-formly-props.model';

@Component({
  selector: 'app-nz-formly-field-date-picker',
  templateUrl: './nz-formly-field-date-picker.component.html',
  imports: [CommonModule, BidiModule, ReactiveFormsModule, FormlyModule, NzDatePickerModule]
})
export class NzFormlyFieldDatePickerComponent extends FieldType<
  FieldTypeConfig<NzFormlyDatePickerProps>
> {
  private dateLocale = inject(NZ_DATE_LOCALE, { optional: true });

  get fieldID() {
    return 'control-' + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? 'error' : '';
  }

  /**
   * RTL when a Jalali (Persian) date locale is active, so the calendar grid and
   * input read right-to-left. Falls back to LTR for Gregorian. Can be forced
   * per field via `props.rtl`.
   */
  get dir(): 'rtl' | 'ltr' {
    const code = (this.dateLocale as { code?: string } | null)?.code;
    return code?.startsWith('fa') ? 'rtl' : 'ltr';
  }
}
