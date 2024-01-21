# NgxNzFormly

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Installation

Angular version `16.x.x`
```bash
$ npm install --save ngx-nz-formly
```

## Quick Start

Adding ``ngx-nz-formly`` to your application is super easy. All you need is to add the following modules to imports in ``app.module.ts``. 
```
@NgModule({
  declarations: [...],
  imports: [
    ...,
    OverlayModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot({}),
    FormlyModule.forRoot(NzFormlyForRoot),
  ],
  providers: [
    ...,
    { provide: NZ_I18N, useValue: en_US }
  ],
})
export class AppModule {}
```
As an explanation, ``HttpClientModule`` and ``providers`` relates to Ant design setup.
In order to use special masks on inputs, you need to add ``NgxMaskModule``, too. At last, we have ``OverlayModule``, ``BrowserAnimationsModule`` and ``FormlyModule`` to complete the setup.
Finally, you need ``NzFormlyForRoot`` config to FormlyModule for root to be able to have your formly with Ant Design.
