import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormlyFieldBuilder } from './ngx-nz-formly-type-safe.model';

/**
 * Back-compat shim for NgModule-based consumers. The field types/wrappers are
 * now standalone components resolved by Formly at runtime, so this module only
 * provides the builder and re-exports FormlyModule. Existing setups that import
 * NgxNzFormlyModule and call `FormlyModule.forRoot(NzFormlyForRoot)` keep
 * working. New apps should prefer `provideNgxNzFormly()`.
 */
@NgModule({
  imports: [FormlyModule],
  providers: [NzFormlyFieldBuilder],
  exports: [FormlyModule]
})
export class NgxNzFormlyModule {}
