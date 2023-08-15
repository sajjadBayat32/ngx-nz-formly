import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlySelectProps } from "../../formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-formly-field-select",
  templateUrl: "./formly-field-select.component.html",
  styleUrls: ["./formly-field-select.component.scss"],
})
export class FormlyFieldSelectComponent
  extends FieldType<FieldTypeConfig<FormlySelectProps>>
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

  get fieldID() {
    return "control-" + this.field.key;
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
