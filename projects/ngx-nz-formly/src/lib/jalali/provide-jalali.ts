import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  provideAppInitializer
} from '@angular/core';
import { fa_IR, NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';
import { faIR } from 'date-fns-jalali/locale';
import { patchCandyDateForJalali } from './patch-candy-date';

/**
 * Enables the Jalali (Persian) calendar for ngx-nz-formly's date-picker:
 * a real Jalali calendar panel, with correct Gregorian `Date` values emitted
 * to the form control.
 *
 * It provides ng-zorro's Persian UI text (`fa_IR`) and a Jalali date-fns locale
 * (`date-fns-jalali`'s `faIR`) for formatting, and patches `CandyDate`'s field
 * getters to be Jalali-aware so ng-zorro's getter/setter round-trip no longer
 * corrupts the value (see patch-candy-date.ts).
 *
 * REQUIRED consumer setup: ng-zorro derives its calendar *arithmetic* from the
 * functions it imports from `date-fns`, which cannot be swapped via DI. To get
 * a real Jalali calendar you must replace `date-fns` with `date-fns-jalali` at
 * install time via a package override (npm `overrides` / yarn `resolutions`):
 *
 * ```json
 * "overrides": { "date-fns": "npm:date-fns-jalali@2.30.0-0" }
 * ```
 *
 * (A tsconfig `paths` alias is NOT enough — the esbuild application builder does
 * not rewrite imports inside already-compiled node_modules.)
 *
 * Usage (standalone bootstrap):
 * ```ts
 * providers: [provideNgxNzFormly(), provideNzFormlyJalali()]
 * ```
 */
export function provideNzFormlyJalali(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: NZ_I18N, useValue: fa_IR },
    { provide: NZ_DATE_LOCALE, useValue: faIR },
    provideAppInitializer(() => patchCandyDateForJalali())
  ]);
}
