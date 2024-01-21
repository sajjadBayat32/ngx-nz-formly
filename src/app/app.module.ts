import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import { AppComponent } from "./app.component";
import { FormlyModule } from "@ngx-formly/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import en from "@angular/common/locales/en";
import { NgxMaskModule } from "ngx-mask";
import { HttpClientModule } from "@angular/common/http";
import { NzFormlyForRoot } from "../../projects/ngx-nz-formly";
import { NzButtonModule } from "ng-zorro-antd/button";
import { OverlayModule } from "@angular/cdk/overlay";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    NgxMaskModule.forRoot({}),
    FormlyModule.forRoot(NzFormlyForRoot),
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
