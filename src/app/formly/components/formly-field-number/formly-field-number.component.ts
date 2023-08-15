import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyNumberProps } from "../../formly-props.model";
import { NzInputNumberComponent } from "ng-zorro-antd/input-number";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-formly-field-number",
  templateUrl: "./formly-field-number.component.html",
  styleUrls: ["./formly-field-number.component.scss"],
})
export class FormlyFieldNumberComponent
  extends FieldType<FieldTypeConfig<FormlyNumberProps>>
  implements OnInit, OnDestroy
{
  unSubscribeAll$ = new Subject<void>();

  ngOnInit() {
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

  get nzFormatter() {
    return this.props.format === "currency"
      ? this.currencyFormatter
      : (value: number) => value;
  }

  currencyFormatter(value: number | string) {
    if (value) {
      return Number(value).toLocaleString("en-US");
    }
    return value;
  }

  get fieldID() {
    return "control-" + this.field.key;
  }

  focusInOut(event: NzInputNumberComponent) {
    if (this.props.format) {
      event.blur();
      event.focus();
    }
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
