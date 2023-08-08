import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormlyCustomFieldProps } from "./formly/formly-props.model";

class FormModel {
  email: string;
  olderThan20: boolean;

  constructor(element: any) {
    this.email = element?.email;
    this.olderThan20 = element?.olderThan20;
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
  fields: FormlyFieldConfig<FormlyCustomFieldProps>[] = [
    {
      key: "firstName",
      type: "input",
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
    },
    {
      key: "lastName",
      type: "input",
      className: "flex-50 px-2",
      props: {
        maxLength: 10,
        label: "Last Name",
        styles: {
          labelWidth: "110px",
          wrapperClass: "mb-4",
        },
      },
    },
    {
      key: "phoneNumber",
      type: "input",
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
    },
    {
      key: "email",
      type: "input",
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
    },
    {
      key: "password",
      type: "input",
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
    },
    {
      key: "olderThan20",
      type: "checkbox",
      className: "flex-50 px-2 mb-4",
      props: {
        label: "I am older that 20",
      },
    },
    {
      key: "age",
      type: "input",
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
    },
  ];

  ngOnInit() {}

  onSubmit() {
    console.log(this.model);
  }
}
