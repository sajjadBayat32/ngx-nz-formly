import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyCheckboxProps } from "../../ngx-nz-formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-nz-formly-field-checkbox",
  templateUrl: "./nz-formly-field-checkbox.component.html",
  styleUrls: ["./nz-formly-field-checkbox.component.scss"],
})
export class NzFormlyFieldCheckboxComponent
  extends FieldType<FieldTypeConfig<NzFormlyCheckboxProps>>
  implements OnInit, OnDestroy
{
  unSubscribeAll$ = new Subject<void>();

  get fieldID() {
    return "control-" + this.field.key;
  }

  ngOnInit() {
    this.onValueChange();
  }

  onValueChange() {
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
