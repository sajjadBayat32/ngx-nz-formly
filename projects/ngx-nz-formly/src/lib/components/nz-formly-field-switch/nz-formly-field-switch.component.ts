import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlySwitchProps } from "../../ngx-nz-formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-nz-formly-field-switch",
  templateUrl: "./nz-formly-field-switch.component.html",
  styleUrls: ["./nz-formly-field-switch.component.scss"],
})
export class NzFormlyFieldSwitchComponent
  extends FieldType<FieldTypeConfig<NzFormlySwitchProps>>
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
