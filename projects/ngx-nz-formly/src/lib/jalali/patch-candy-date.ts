import { CandyDate } from 'ng-zorro-antd/core/time';
import { getDate, getMonth, getYear, setDate } from 'date-fns-jalali';

/**
 * ng-zorro derives its calendar arithmetic from `date-fns`. With the
 * `date-fns` -> `date-fns-jalali` package override, most `CandyDate` operations
 * become Jalali-aware, but two things stay on the native (Gregorian) calendar
 * and break the round-trip that emits the form value:
 *
 *  1. The field GETTERS (`getYear/getMonth/getDate`) read raw native fields.
 *  2. `setDate` uses the native `Date.setDate` (unlike `setYear`/`setMonth`,
 *     which use the overridden date-fns and are therefore Jalali).
 *
 * ng-zorro's `DateTableComponent.changeValueFromInside` does:
 *
 *   activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate())
 *
 * Mixing Gregorian getters + Jalali `setYear/setMonth` + native `setDate`
 * corrupts the emitted Date (year ~+621 off, wrong day). This patch aligns all
 * axes on the Jalali calendar so getter/setter round-trip and the emitted
 * native Date stays the correct Gregorian instant. Idempotent; call once at app
 * init (see provideNzFormlyJalali()).
 */
export function patchCandyDateForJalali(): void {
  const proto = CandyDate.prototype as unknown as {
    nativeDate: Date;
    getYear(): number;
    getMonth(): number;
    getDate(): number;
    setDate(amount: number): CandyDate;
    __ngxNzJalaliPatched?: boolean;
  };
  if (proto.__ngxNzJalaliPatched) {
    return;
  }
  proto.getYear = function () {
    return getYear(this.nativeDate);
  };
  proto.getMonth = function () {
    return getMonth(this.nativeDate);
  };
  proto.getDate = function () {
    return getDate(this.nativeDate);
  };
  proto.setDate = function (amount: number) {
    return new CandyDate(setDate(this.nativeDate, amount));
  };
  proto.__ngxNzJalaliPatched = true;
}
