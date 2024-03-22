import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyTextareaProps } from "../../ngx-nz-formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "",
  templateUrl: "./nz-formly-field-textarea.component.html",
  styleUrls: [],
})
export class NzFormlyFieldTextareaComponent
  extends FieldType<FieldTypeConfig<NzFormlyTextareaProps>>
  implements OnInit, OnDestroy
{
  unSubscribeAll$ = new Subject<void>();

  get fieldID() {
    return "control-" + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? "error" : "";
  }

  ngOnInit() {
    this.onValueChanges();
  }

  onValueChanges() {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.unSubscribeAll$),
        tap((value: string) => {
          if (typeof this.props?.change == "function") {
            this.props.change(this.field, value);
          }
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
