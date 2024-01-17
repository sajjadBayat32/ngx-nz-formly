import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { NzFormlyInputProps } from "../../ngx-nz-formly-props.model";
import { debounceTime, Subject, takeUntil, tap } from "rxjs";
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
  extends FieldType<FieldTypeConfig<NzFormlyInputProps>>
  implements AfterViewInit, OnDestroy
{
  mask: string | undefined;
  unSubscribeAll$ = new Subject<void>();

  ngAfterViewInit() {
    this.createInitState();
    this.onValueChange();
  }

  createInitState() {
    if (this.props.mask === "phone") {
      this.mask = DefaultPhoneMask.globalMask;
      this.handlePhoneMask();
    } else {
      this.mask = this.props.mask;
    }
  }

  handlePhoneMask() {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.unSubscribeAll$),
        tap((value: string) => {
          if (value == "") {
            // hint: without setTimeout we don't have Ctrl + A -> delete
            setTimeout(() => {
              this.mask = DefaultPhoneMask.globalMask;
            });
          } else {
            let mask = this.findAppropriateMask(value);
            if (mask && this.mask !== mask.globalMask) {
              this.mask = mask.globalMask?.replace(/#|[1-9]/g, "0");
            }
          }
        }),
      )
      .subscribe();
  }

  onValueChange() {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.unSubscribeAll$),
        debounceTime(300),
        tap((value: string) => {
          if (typeof this.props?.change == "function") {
            this.props.change(this.field, value);
          }
        }),
      )
      .subscribe();
  }

  findAppropriateMask(value: string): CountryCodeMask | null {
    let newMask = CountryMasks2.filter(item =>
      this.exactEquality(value, item.prefix),
    ).find(item => value.length <= item.globalMask.length);
    if (newMask) return newMask;
    return null;
  }

  exactEquality(str: string, prefix: string): boolean {
    // hint: replace function removes all characters except numbers to return clean numeric string
    // hint: index of convince us to match prefix on first index of input value
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

  get type() {
    return this.props.type ?? "text";
  }

  get fieldID() {
    return "control-" + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? "error" : "";
  }

  ngOnDestroy() {
    this.unSubscribeAll$.next();
    this.unSubscribeAll$.complete();
  }
}
