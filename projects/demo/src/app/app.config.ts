import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { provideNgxNzFormly } from 'ngx-nz-formly';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideNgxNzFormly(),
    provideNgxMask(),
    { provide: NZ_I18N, useValue: en_US }
    // EXPERIMENTAL Jalali (Persian) calendar — see provideNzFormlyJalali().
    // It renders a Jalali calendar but currently emits an offset Date value
    // (known ng-zorro/date-fns-jalali issue); not wired here until fixed.
  ]
};
