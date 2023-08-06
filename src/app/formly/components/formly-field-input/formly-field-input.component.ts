import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyInputProps } from "../../formly-props.model";
import { debounceTime, filter, fromEvent, map, Subject, takeUntil, tap } from "rxjs";

@Component({
  selector: "app-formly-field-input",
  templateUrl: "./formly-field-input.component.html",
  styleUrls: ["./formly-field-input.component.scss"],
})
export class FormlyFieldInputComponent
  extends FieldType<FieldTypeConfig<FormlyInputProps>>
  implements AfterViewInit, OnDestroy
{
  @ViewChild("input") inputElement: ElementRef | undefined;
  private unSubscribeAll$ = new Subject<void>();

  ngAfterViewInit() {
    if (!this.inputElement) return;
    fromEvent(this.inputElement.nativeElement, "input").pipe(
      takeUntil(this.unSubscribeAll$),
      debounceTime(300),
      map(() => this.inputElement?.nativeElement.value),
      tap((value: any) => {
        if (typeof this.props.change == "function") {
          this.props.change(value);
        }
      }),
    );
  }

  changeShowPassword(input: any) {
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

  showPassword(input: any): boolean {
    return input.type === "text";
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
