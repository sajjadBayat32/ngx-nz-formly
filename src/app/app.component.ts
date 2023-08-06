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
        required: true,
        labelWidth: "120px",
        label: "Email address",
        fieldWrapperClass: "flex-auto",
        placeholder: "e.x. sajjad@gmail.com",
        change: data => console.log(data),
      },
      validators: {
        validation: ["email"],
      },
    },
  ];

  ngOnInit() {}

  onSubmit() {
    console.log(this.model);
  }
}
