import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { FormlyModule } from "@ngx-formly/core";
import { NgxMaskModule } from "ngx-mask";
import { NzFormlyForRoot, provideNzFormlyJalali } from "ngx-nz-formly";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      FormlyModule.forRoot(NzFormlyForRoot),
      NgxMaskModule.forRoot(),
    ),
    // Jalali (Persian) calendar. Requires the `date-fns` -> `date-fns-jalali`
    // package override (see root package.json "overrides") for real Jalali
    // arithmetic. KNOWN ISSUE on ng-zorro 16: the calendar renders correctly
    // but the emitted Date is year-offset by +621 (2647 vs 2026) — deferred to
    // the Phase 3 ng-zorro 21 upgrade. Remove this line for the Gregorian
    // default (also drop the override).
    provideNzFormlyJalali(),
  ],
};
