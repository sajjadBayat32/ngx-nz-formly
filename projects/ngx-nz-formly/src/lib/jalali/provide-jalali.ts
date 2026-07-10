import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { fa_IR, NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';
import { faIR } from 'date-fns-jalali/locale';

/**
 * Enables the Jalali (Persian) calendar for ngx-nz-formly's date-picker.
 *
 * ⚠️ EXPERIMENTAL — see the KNOWN ISSUE below. The calendar renders correctly
 * in Jalali, but the emitted date VALUE is currently offset by ~+621 years, so
 * this is not yet safe for value-critical forms. A proper Jalali date adapter
 * is tracked as a follow-up.
 *
 * This provides ng-zorro's Persian UI text (`fa_IR`) and a Jalali date-fns
 * locale (`date-fns-jalali`'s `faIR`) for label formatting.
 *
 * IMPORTANT: ng-zorro derives the calendar *arithmetic* from the functions it
 * imports from `date-fns` (see its `candy-date`). Providers alone only switch
 * labels/formatting. To get an actual Jalali calendar, the consuming app must
 * also replace `date-fns` with `date-fns-jalali` via a package override
 * (npm `overrides` / yarn `resolutions`), e.g.:
 *
 * ```json
 * "overrides": { "date-fns": "npm:date-fns-jalali@2.30.0-0" }
 * ```
 *
 * A tsconfig `paths` alias is NOT enough: the esbuild application builder does
 * not rewrite imports inside already-compiled node_modules (ng-zorro).
 *
 * KNOWN ISSUE (confirmed on ng-zorro 16 AND 21): with the override active, the
 * calendar *renders* correctly in Jalali, but selecting a date emits a Date
 * whose Gregorian year is offset by ~+621 (e.g. 2647 instead of 2026), and the
 * offset compounds when the picker is reopened. ng-zorro's internal cell date
 * is correct — the corruption comes from routing the value round-trip through
 * the global date-fns-jalali override. The correct fix is a dedicated Jalali
 * date adapter rather than a global date-fns replacement; tracked as a
 * follow-up. Until then, treat this provider as display-only / experimental.
 *
 * Usage (standalone bootstrap):
 * ```ts
 * providers: [
 *   importProvidersFrom(FormlyModule.forRoot(NzFormlyForRoot)),
 *   provideNzFormlyJalali(),
 * ]
 * ```
 */
export function provideNzFormlyJalali(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: NZ_I18N, useValue: fa_IR },
    { provide: NZ_DATE_LOCALE, useValue: faIR }
  ]);
}
