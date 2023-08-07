import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { FormlyInputProps } from "../../formly-props.model";
import { debounceTime, map, Subject, takeUntil, tap } from "rxjs";
import { CountryCodeMask, CountryMasks2 } from "./phone-mask.config";

const DefaultPhoneMask: CountryCodeMask = {
  countryShortName: "IR",
  prefix: "+98",
  globalMask: "+00(000)000-0000",
};

@Component({
  selector: "app-formly-field-input",
  templateUrl: "./formly-field-input.component.html",
  styleUrls: ["./formly-field-input.component.scss"],
})
export class FormlyFieldInputComponent
  extends FieldType<FieldTypeConfig<FormlyInputProps>>
  implements AfterViewInit, OnDestroy
{
  unSubscribeAll$ = new Subject<void>();
  @ViewChild("input") inputElement: ElementRef | undefined;

  ngAfterViewInit() {
    this.onValueChange();
  }

  onValueChange() {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.unSubscribeAll$),
        map(() => this.formControl.value),
        tap((value: string) => {
          if (this.props.mask) {
            if (value == "") {
              this.props.mask = DefaultPhoneMask.globalMask;
            } else {
              let mask = this.findAppropriateMask(value);
              if (mask && this.props.mask !== mask.globalMask) {
                this.props.mask = mask.globalMask?.replace(/#|[1-9]/g, "0");
              }
            }
          }
        }),
        debounceTime(300),
        tap((value: any) => {
          if (typeof this.props.change == "function") {
            this.props.change(value);
          }
        }),
      )
      .subscribe();
  }

  findAppropriateMask(value: string): CountryCodeMask | null {
    let newMask = CountryMasks2.filter(item => this.exactEquality(value, item.prefix)).find(
      item => value.length <= item.globalMask.length,
    );
    if (newMask) return newMask;
    return null;
  }

  exactEquality(str: string, prefix: string): boolean {
    // replace function removes all characters except numbers to return clean numeric string
    // index of convince us to match prefix on first index of input value
    let new_str = str.replace(/[^0-9.]/g, "");
    let new_prefix = prefix.replace(/[^0-9.]/g, "");
    return new_str.indexOf(new_prefix) == 0;
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

  get mask(): string {
    if (this.props.mask) {
      if (this.props.mask == "phone") {
        return <string>DefaultPhoneMask.globalMask;
      }
      return this.props.mask;
    }
    return "";
  }

  get type() {
    return this.props.type ?? "text";
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
