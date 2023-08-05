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
      key: "email",
      type: "input",
      name: "Email",
      props: {
        label: "Email address",
        placeholder: "e.x. sajjad@gmail.com",
        labelWidth: "120px",
        required: true,
        // minLength: 5,
        // maxLength: 15,
        isPassword: true,
        fieldWrapperClass: "flex-auto",
      },
      validators: {
        validation: ["password"],
      },
      // validators: {
      //   minLength: {
      //     expression: (c: AbstractControl, f: FormlyFieldConfig) =>
      //       minLengthValidator(c, f),
      //     message: (err: any, f: FormlyFieldConfig) => minLengthMessage(f),
      //   },
      // },
    },
  ];

  ngOnInit() {}

  onSubmit() {
    console.log(this.model);
  }
}
