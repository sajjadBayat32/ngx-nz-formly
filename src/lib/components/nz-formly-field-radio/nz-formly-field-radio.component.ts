import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyRadioProps } from "../../ngx-nz-formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-nz-formly-field-radio",
  templateUrl: "./nz-formly-field-radio.component.html",
  styleUrls: ["./nz-formly-field-radio.component.scss"],
})
export class NzFormlyFieldRadioComponent
  extends FieldType<FieldTypeConfig<NzFormlyRadioProps>>
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
