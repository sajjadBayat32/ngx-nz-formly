# NgxNzFormly

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.<br>
The only best library to integrate [ngx-formly](https://formly.dev/)
with [ng-zorro](https://ng.ant.design/docs/introduce/en)

## Installation

Angular version `16.x.x` <br>
Adding ``ngx-nz-formly`` to your application is super easy but in order to use ``ngx-nz-formly`` you should install
three more packages.

### Install ng-zorro-antd

```bash
$ npm install ng-zorro-antd --save
```

Import the pre-built stylesheet in ``angular.json``

```json
{
  "styles": [
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css"
  ]
}
```

### Install ngx-formly

```bash
$ npm install @angular/forms @ngx-formly/core --save
```

### Install ngx-mask

```bash
$ npm insatll ngx-mask --save
```

### Install Bootstrap (Optional)

If you want to find the final demo more clearly and beautiful, install ``bootstrap``, too.

```bash
$ npm insatll bootstrap --save
```

Then add following lines to ``angular.json``

```
{
  "styles": [
    ...
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],
  "scripts": [
    ...
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
}
```

### Install ngx-nz-formly

```bash
$ npm install ngx-nz-formly --save
```

Last step is to add below modules to ``app.module.ts``

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

As an explanation, ``HttpClientModule`` and ``providers`` relates to Ant design setup. In order to use special masks on
inputs, you need to add ``NgxMaskModule``, too. At last, we have ``OverlayModule``, ``BrowserAnimationsModule``
and ``FormlyModule`` to complete the setup. Finally, you need ``NzFormlyForRoot`` config to FormlyModule for root to be
able to have your formly with Ant Design.

## Usage

add below html code to your ``app.component.html``

```html
<formly-form
  [form]="form"
  [fields]="fields"
  [model]="model"
></formly-form>
```

Finally, your ``app.component.ts`` file could be something like following box. So please take this as sample
documentation of available features, until I write one

```ts
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { BehaviorSubject, concatMap, delay, from, of } from "rxjs";
import { NzOptionComponent } from "ng-zorro-antd/select";
import { NzFormlyFieldBuilder } from "../../projects/ngx-nz-formly/src/public-api";

class FormModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  budget: number;
  age: number;
  olderThan20: boolean;
  allowNotifications: boolean;
  city: any;
  gender: string;

  constructor(element: any) {
    this.firstName = element?.firstName;
    this.lastName = element?.lastName;
    this.phoneNumber = element?.phoneNumber;
    this.email = element?.email;
    this.password = element?.password;
    this.budget = element?.budget;
    this.age = element?.age;
    this.olderThan20 = element?.olderThan20;
    this.allowNotifications = element?.allowNotifications;
    this.city = element?.city;
    this.gender = element?.gender;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  model = new FormModel({});
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [];
  labelObs$ = new BehaviorSubject("Label");

  ngOnInit() {
    this.initForm();
    from(["Label 1", "Label 2", "Label 3"])
      .pipe(concatMap(item => of(item).pipe(delay(1000))))
      .subscribe(item => this.labelObs$.next(item));
  }

  initForm() {
    const fb = new NzFormlyFieldBuilder<FormModel>();
    this.fields = [
      fb.input("firstName", {
        className: "flex-50 px-2",
        props: {
          labelPosition: "float",
          required: true,
          minLen: 3,
          showError: false,
          labelObs: this.labelObs$,
          focus: () => console.log("input focused"),
          blur: () => console.log("input blurred"),
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
        validators: {
          validation: ["minLen"],
        },
      }),
      fb.input("lastName", {
        className: "flex-50 px-2",
        props: {
          required: true,
          maxLen: 10,
          labelPosition: "top",
          label: "Last Name",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
        validators: {
          validation: ["maxLen"],
        },
      }),
      fb.input("phoneNumber", {
        className: "flex-50 px-2",
        props: {
          label: "Phone No",
          mask: "phone",
          placeholder: "e.x. 9127403028",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
      }),
      fb.input("email", {
        className: "flex-50 px-2",
        props: {
          required: true,
          label: "Email address",
          placeholder: "e.x. sajjad@gmail.com",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
          change: (field, event) => console.log("input changed to:", event),
        },
        validators: {
          validation: ["email"],
        },
      }),
      fb.input("password", {
        className: "flex-50 px-2",
        props: {
          required: true,
          type: "password",
          label: "Password",
          placeholder: "use complex one",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
        validators: {
          validation: ["password"],
        },
      }),
      fb.input("budget", {
        className: "flex-50 px-2",
        props: {
          nzPrefix: "$",
          label: "Budget",
          mask: "separator.2",
          thousandSeparator: ",",
          nzAddOnBeforeIcon: "wallet",
          placeholder: "e.x. 2000",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
          change: (field, event) => console.log("number changed to:", event),
          focus: () => console.log("number focused"),
          blur: () => console.log("number blurred"),
        },
        validators: {
          custom: {
            expression: (control: FormControl) => control.value > 2500,
            message: "Your budget is less than expected budget",
          },
        },
      }),
      fb.checkbox("olderThan20", {
        className: "flex-50 px-2 mb-4",
        props: {
          label: "I am older that 20",
          change: (field, event) => console.log("checkbox changed to:", event),
        },
      }),
      fb.input("age", {
        className: "flex-50 px-2",
        props: {
          minValue: 20,
          maxValue: 100,
          label: "Age",
          placeholder: "enter your age",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
        expressionProperties: {
          "props.disabled": model => !model.olderThan20,
        },
        validators: {
          validation: ["minValue", "maxValue"],
        },
      }),
      fb.switch("allowNotifications", {
        className: "flex-50 px-2",
        props: {
          nzCheckedChildren: "1",
          nzUnCheckedChildren: "0",
          label: "Allow notifications",
          styles: {
            labelWidth: "auto",
            wrapperClass: "mb-4",
          },
          change: (field, event) => console.log("switch changed to:", event),
        },
        expressionProperties: {
          "props.hidden": model => !model.olderThan20,
        },
      }),
      fb.select("city", {
        className: "flex-50 px-2",
        props: {
          objectValue: false,
          label: "City",
          nzAllowClear: true,
          nzShowSearch: true,
          placeholder: "select your city",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
          nzOptionOverflowSize: 4,
          nzOptions: [
            {
              label: "Zanjan",
              value: "Znj",
              nzCustomContent: `<strong>Zanjan</strong>`,
            },
            {
              label: "Tehran",
              value: "Teh",
              nzCustomContent: `<i>Tehran</i>`,
            },
            { label: "Isfahan", value: "Isf" },
            { label: "Shiraz", value: "Shi" },
            { label: "Gilan", value: "Gil" },
          ],
          nzFilterOption: (input?: string, option?: NzOptionComponent) => {
            return option?.nzLabel?.toString().includes(input || "") || false;
          },
          compareWith: (o1: any, o2: any): boolean => o1 == o2,
          nzOpenChange: event => console.log("selection open status:", event),
          nzScrollToBottom: () => console.log("scroll"),
          nzOnSearch: event => console.log("search", event),
          change: (field, event) => console.log("selection changed to:", event),
        },
        expressionProperties: {
          "props.disabled": model => !model.olderThan20,
        },
      }),
      fb.radio("gender", {
        className: "flex-50 px-2",
        props: {
          label: "Gender",
          nzType: "nz-radio-button",
          styles: {
            labelWidth: "110px",
          },
          nzOptions: [
            {
              label: "Male",
              value: "Male",
            },
            {
              label: "Female",
              value: "Female",
            },
            {
              label: "None",
              value: null,
            },
          ],
          nzButtonStyle: "solid",
          change: (field, event) => console.log("Radio changed to:", event),
        },
      }),
      fb.button({
        className: "d-flex",
        props: {
          text: "Reset",
          nzType: "primary",
          nzLoading: false,
          nzDanger: false,
          nzBlock: true,
          click: () => console.log("clicked"),
        },
      }),
    ];
  }

  onSubmit() {
    Object.keys(this.form.controls).forEach(key => {
      console.log(key, this.form.get(key)?.errors);
    });
    console.log(this.model);
  }
}
```

## Appreciate

At last, I want to thank every one of you who supports and use the provided library. Be sure that there are lots of more
features coming up. So please share your feedbacks and comments with me. I will be so happy of getting more of them.
