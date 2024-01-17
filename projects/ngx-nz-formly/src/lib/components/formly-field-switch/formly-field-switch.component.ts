import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlySwitchProps } from "../../formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-formly-field-switch",
  templateUrl: "./formly-field-switch.component.html",
  styleUrls: ["./formly-field-switch.component.scss"],
})
export class FormlyFieldSwitchComponent
  extends FieldType<FieldTypeConfig<FormlySwitchProps>>
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

  onChange(event: boolean) {
    if (typeof this.props?.change === "function") {
      this.props.change(this.field, event);
    }
  }

  get fieldID() {
    return "control-" + this.field.key;
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
