import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormlyFieldBuilder } from "./formly/formly-type-safe.model";

class FormModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  age: string;
  olderThan20: boolean;
  allowNotifications: boolean;

  constructor(element: any) {
    this.firstName = element?.firstName;
    this.lastName = element?.lastName;
    this.phoneNumber = element?.phoneNumber;
    this.email = element?.email;
    this.password = element?.password;
    this.age = element?.age;
    this.olderThan20 = element?.olderThan20;
    this.allowNotifications = element?.allowNotifications;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  now = Date.now();
  model = new FormModel({});
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const fb = new FormlyFieldBuilder<FormModel>();
    this.fields = [
      fb.input("firstName", {
        className: "flex-50 px-2",
        props: {
          required: true,
          minLength: 3,
          label: "First Name",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
      }),
      fb.input("lastName", {
        className: "flex-50 px-2",
        props: {
          maxLength: 10,
          label: "Last Name",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
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
          change: data => console.log(data),
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
      fb.checkbox("olderThan20", {
        className: "flex-50 px-2 mb-4",
        props: {
          label: "I am older that 20",
        },
      }),
      fb.input("age", {
        className: "flex-50 px-2",
        props: {
          mask: "00",
          label: "Age",
          disabled: this.model.olderThan20,
          placeholder: "enter your age",
          styles: {
            labelWidth: "110px",
            wrapperClass: "mb-4",
          },
        },
        expressionProperties: {
          "props.disabled": model => !model.olderThan20,
        },
      }),
      fb.switch("allowNotifications", {
        className: "flex-50 px-2",
        props: {
          labelPosition: "Left",
          label: "Allow notifications",
          styles: {
            labelWidth: "auto",
            wrapperClass: "mb-4",
          },
        },
      }),
    ];
  }

  onSubmit() {
    console.log(this.model);
  }
}
