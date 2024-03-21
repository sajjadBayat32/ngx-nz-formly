import { Component, OnDestroy, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlySelectProps } from "../../ngx-nz-formly-props.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-nz-formly-field-select",
  templateUrl: "./nz-formly-field-select.component.html",
})
export class NzFormlyFieldSelectComponent
  extends FieldType<FieldTypeConfig<NzFormlySelectProps>>
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
