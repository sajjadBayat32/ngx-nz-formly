# ngx-nz-formly

Declarative [Ant Design](https://ng.ant.design/) forms for Angular, powered by
[ngx-formly](https://formly.dev/) and [ng-zorro-antd](https://ng.ant.design/).
Build ng-zorro forms from a typed config with a fluent, type-safe builder — no
hand-written template per field.

Ships field types for `input`, `textarea`, `checkbox`, `switch`, `radio`,
`select`, `slider`, `button`, `uploader`, and `datePicker` (with an optional
**Jalali / Persian calendar**), plus label/error wrappers and a set of
validators.

## Requirements

`ngx-nz-formly` targets **Angular 21** and declares these peer dependencies:

| Package            | Version                                               |
| ------------------ | ----------------------------------------------------- |
| `@angular/common`  | `^21.0.0`                                             |
| `@angular/core`    | `^21.0.0`                                             |
| `@ngx-formly/core` | `^7.0.0`                                              |
| `ng-zorro-antd`    | `^21.0.0`                                             |
| `ngx-mask`         | `^21.0.0`                                             |
| `date-fns-jalali`  | `^2.30.0-0` (optional — only for the Jalali calendar) |

## Installation

```bash
npm install ngx-nz-formly ng-zorro-antd @ngx-formly/core ngx-mask
```

Import ng-zorro's stylesheet in `angular.json`:

```json
{
  "styles": ["node_modules/ng-zorro-antd/ng-zorro-antd.min.css"]
}
```

## Setup (standalone)

Register everything in your application bootstrap. `provideNgxNzFormly()` wires
the ng-zorro field types into Formly and provides the type-safe builder:

```ts
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { provideNgxNzFormly } from 'ngx-nz-formly';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(), // required by ng-zorro's uploader
    provideNgxMask(), // required for masked inputs
    provideNgxNzFormly(),
    { provide: NZ_I18N, useValue: en_US }
  ]
};
```

```ts
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig);
```

> **Using NgModules?** A back-compat `NgxNzFormlyModule` is still exported. Import
> it and register the config yourself with
> `FormlyModule.forRoot(NzFormlyForRoot)`. The field types are standalone
> components resolved by Formly at runtime, so no per-component declaration is
> needed.

## Usage

Render a Formly form in your component's template:

```html
<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
```

The host component is standalone — import `FormlyModule` (and
`ReactiveFormsModule` for the `FormGroup`). Build the `fields` with the type-safe
`NzFormlyFieldBuilder<TModel>`; each method constrains the `key` to a matching
property of your model and gives typed `props`:

```ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NzFormlyFieldBuilder } from 'ngx-nz-formly';

interface FormModel {
  firstName: string;
  phoneNumber: string;
  email: string;
  password: string;
  budget: number;
  olderThan20: boolean;
  city: string;
  gender: string;
  birthDate: Date;
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormlyModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  form = new FormGroup({});
  model: Partial<FormModel> = {};
  fields = this.buildFields();

  private buildFields(): FormlyFieldConfig[] {
    const fb = new NzFormlyFieldBuilder<FormModel>();
    return [
      fb.input('firstName', {
        props: {
          label: 'First name',
          labelPosition: 'float',
          required: true,
          minLen: 3,
          change: (field, value) => console.log('changed:', value)
        },
        validators: { validation: ['minLen'] }
      }),
      fb.input('phoneNumber', {
        props: { label: 'Phone No', mask: 'phone', nzPlaceholder: 'e.g. 9127403028' }
      }),
      fb.input('email', {
        props: { label: 'Email', required: true },
        validators: { validation: ['email'] }
      }),
      fb.input('password', {
        props: { label: 'Password', required: true, type: 'password' },
        validators: { validation: ['password'] }
      }),
      fb.input('budget', {
        props: {
          label: 'Budget',
          nzPrefix: '$',
          mask: 'separator.2',
          thousandSeparator: ','
        }
      }),
      fb.checkbox('olderThan20', { props: { label: 'I am older than 20' } }),
      fb.select('city', {
        props: {
          label: 'City',
          nzAllowClear: true,
          nzShowSearch: true,
          nzOptions: [
            { label: 'Zanjan', value: 'Znj' },
            { label: 'Tehran', value: 'Teh' },
            { label: 'Shiraz', value: 'Shi' }
          ]
        },
        // Formly expressions still work as usual
        expressions: { 'props.disabled': (field) => !field.model.olderThan20 }
      }),
      fb.radio('gender', {
        props: {
          label: 'Gender',
          nzType: 'nz-radio-button',
          nzButtonStyle: 'solid',
          nzOptions: [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' }
          ]
        }
      }),
      fb.datePicker('birthDate', { props: { label: 'Birth date' } }),
      fb.button({
        props: {
          text: 'Submit',
          nzType: 'primary',
          nzBlock: true,
          click: () => console.log(this.model)
        }
      })
    ];
  }
}
```

### Validators

Built-in validators you can list in `validators.validation`: `required`,
`minLen`, `maxLen`, `minValue`, `maxValue`, `email`, `password`. The matching
`min*`/`max*` bounds are passed via the field `props` (e.g. `minLen: 3`). You can
still add your own Formly `validators`/`expressions` alongside them.

## Jalali (Persian) calendar

The `datePicker` type can render a Jalali calendar while still emitting a normal
(Gregorian) `Date` to your form model. Enable it in two steps.

**1. Add the providers.** `provideNzFormlyJalali()` supplies Persian UI text
(`fa_IR`), a Jalali date-fns locale, and aligns ng-zorro's date internals so the
emitted value stays correct. It also makes the picker render right-to-left.

```ts
import { provideNgxNzFormly, provideNzFormlyJalali } from 'ngx-nz-formly';

providers: [
  provideNgxNzFormly(),
  provideNzFormlyJalali()
  // note: omit the { provide: NZ_I18N, useValue: en_US } line — Jalali sets fa_IR
];
```

**2. Switch ng-zorro's calendar arithmetic to Jalali.** ng-zorro computes dates
from the functions it imports from `date-fns`; that can't be swapped via DI, so
you replace the `date-fns` package with `date-fns-jalali` through a package
override in your app's `package.json`:

```jsonc
{
  "overrides": {
    // npm
    "date-fns": "npm:date-fns-jalali@2.30.0-0"
  },
  "resolutions": {
    // yarn
    "date-fns": "npm:date-fns-jalali@2.30.0-0"
  }
}
```

Then install `date-fns-jalali` and reinstall from a clean slate:

```bash
npm install date-fns-jalali@2.30.0-0
rm -rf node_modules package-lock.json && npm install
```

> **Why a clean install?** `date-fns-jalali@2.30.0-0` is a prerelease and does
> not satisfy ng-zorro's `date-fns` semver range, so npm can silently skip the
> override on an incremental install. A clean install forces it to take effect.
> Verify with `npm ls date-fns` (it should resolve to `date-fns-jalali`). A
> tsconfig `paths` alias does **not** work — the build system won't rewrite
> imports inside already-compiled `node_modules`.

With both in place the calendar shows Persian months/weekdays right-to-left, and
picking a date emits the correct Gregorian `Date` (e.g. Tir 15 1405 →
`2026-07-06`).

## Appreciate

Thanks to everyone who supports and uses this library. Feedback and
contributions are very welcome.
