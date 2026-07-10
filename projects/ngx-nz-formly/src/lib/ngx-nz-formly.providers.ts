import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormlyForRoot } from './ngx-nz-formly.config';
import { NzFormlyFieldBuilder } from './ngx-nz-formly-type-safe.model';

/**
 * Registers ngx-nz-formly with Formly for a standalone application.
 *
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideAnimations(), provideNgxNzFormly()],
 * });
 * ```
 *
 * The field types/wrappers are standalone components resolved by Formly at
 * runtime, so no NgModule import is required. Add `provideNgxMask()` yourself
 * if you use the masked input.
 */
export function provideNgxNzFormly(): EnvironmentProviders {
  return makeEnvironmentProviders([
    importProvidersFrom(FormlyModule.forRoot(NzFormlyForRoot)),
    NzFormlyFieldBuilder
  ]);
}
