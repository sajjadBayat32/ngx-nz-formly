import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { FormlyModule } from '@ngx-formly/core';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyForRoot } from './formly/formly-main.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot(FormlyForRoot),
    FormlyNgZorroAntdModule,
    BrowserAnimationsModule,
    NzButtonModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { timezone: '-4' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
