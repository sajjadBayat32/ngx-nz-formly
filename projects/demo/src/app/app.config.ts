import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { FormlyModule } from "@ngx-formly/core";
import { NgxMaskModule } from "ngx-mask";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { NzFormlyForRoot } from "ngx-nz-formly";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      FormlyModule.forRoot(NzFormlyForRoot),
      NgxMaskModule.forRoot(),
    ),
    { provide: NZ_I18N, useValue: en_US },
  ],
};
