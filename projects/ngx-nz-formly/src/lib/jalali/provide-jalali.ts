import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from "@angular/core";
import { fa_IR, NZ_DATE_LOCALE, NZ_I18N } from "ng-zorro-antd/i18n";
import { faIR } from "date-fns-jalali/locale";

/**
 * Enables the Jalali (Persian) calendar for ngx-nz-formly's date-picker.
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
 * KNOWN ISSUE (ng-zorro 16): with the override active, the calendar *renders*
 * correctly in Jalali, but selecting a date emits a Date whose Gregorian year
 * is offset by +621 (e.g. 2647 instead of 2026) — ng-zorro 16 feeds the wrong
 * year into date-fns-jalali's setYear. Tracked for re-verification after the
 * ng-zorro 21 upgrade (Phase 3), which is expected to emit correct values.
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
    { provide: NZ_DATE_LOCALE, useValue: faIR },
  ]);
}
