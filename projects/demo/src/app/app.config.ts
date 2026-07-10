import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';
import { provideNgxNzFormly, provideNzFormlyJalali } from 'ngx-nz-formly';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideNgxNzFormly(),
    provideNgxMask(),
    // Jalali (Persian) calendar. Requires the `date-fns` -> `date-fns-jalali`
    // package override (see root package.json "overrides"). Provides fa_IR
    // UI text + a Jalali date-fns locale and patches CandyDate so values stay
    // correct Gregorian Dates.
    provideNzFormlyJalali()
  ]
};
