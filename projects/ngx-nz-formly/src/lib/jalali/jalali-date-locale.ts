import { faIR } from 'date-fns-jalali/locale';
import type { Locale } from 'date-fns-jalali';

/**
 * A Jalali date-fns locale tuned for ng-zorro's date-picker panel:
 *
 * - Weekday column headers: ng-zorro formats them with the date-fns "short"
 *   width, which for faIR is "۱ش/۲ش…". We remap "short" to faIR's "narrow"
 *   width so columns read as single Persian initials (ش ی د س چ پ ج).
 * - Month labels: ng-zorro uses the "abbreviated" width ("مرد"), so we remap it
 *   to the "wide" (full) names ("مرداد").
 *
 * Everything else delegates to the stock faIR locale.
 */
export const jalaliDateLocale: Locale = {
  ...faIR,
  localize: {
    ...faIR.localize,
    day: (value: number, options?: { width?: string }) =>
      faIR.localize.day(value, {
        ...options,
        width: options?.width === 'short' ? 'narrow' : options?.width
      } as Parameters<typeof faIR.localize.day>[1]),
    month: (value: number, options?: { width?: string }) =>
      faIR.localize.month(value, {
        ...options,
        width: options?.width === 'abbreviated' ? 'wide' : options?.width
      } as Parameters<typeof faIR.localize.month>[1])
  }
} as Locale;
