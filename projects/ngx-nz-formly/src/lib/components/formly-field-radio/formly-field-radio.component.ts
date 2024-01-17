import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyRadioProps } from "../../formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-formly-field-radio",
  templateUrl: "./formly-field-radio.component.html",
  styleUrls: ["./formly-field-radio.component.scss"],
})
export class FormlyFieldRadioComponent
  extends FieldType<FieldTypeConfig<FormlyRadioProps>>
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
