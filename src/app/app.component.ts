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
        className: "px-2",
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
        className: "px-2",
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
        className: "px-2",
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
        className: "px-2",
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
        className: "px-2",
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
        className: "px-2",
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
        className: "px-2 mb-4",
        props: {
          label: "I am older that 20",
          change: (field, event) => console.log("checkbox changed to:", event),
        },
      }),
      fb.input("age", {
        className: "px-2",
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
        expressions: {
          "props.disabled": () => !this.model.olderThan20,
        },
        validators: {
          validation: ["minValue", "maxValue"],
        },
      }),
      fb.switch("allowNotifications", {
        className: "px-2",
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
        expressions: {
          "props.hidden": () => !this.model.olderThan20,
        },
      }),
      fb.select("city", {
        className: "px-2",
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
        expressions: {
          "props.disabled": () => !this.model.olderThan20,
        },
      }),
      fb.radio("gender", {
        className: "px-2",
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
    // Object.keys(this.form.controls).forEach(key => {
    //   console.log(key, this.form.get(key)?.errors);
    // });
    // console.log(this.model);
  }
}
