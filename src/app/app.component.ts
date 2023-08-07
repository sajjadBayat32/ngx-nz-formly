import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormlyCustomFieldProps } from "./formly/formly-props.model";

interface FormModel {
  email: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  now = Date.now();
  model: FormModel | {} = {};
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
          labelWidth: "100px",
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
          labelWidth: "100px",
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
          labelWidth: "100px",
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
          labelWidth: "100px",
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
          labelWidth: "100px",
          wrapperClass: "mb-4",
        },
      },
      validators: {
        validation: ["password"],
      },
    },
  ];

  ngOnInit() {}

  onSubmit() {
    console.log(this.model);
  }
}
