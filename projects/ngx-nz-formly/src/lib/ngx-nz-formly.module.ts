import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { CommonModule } from "@angular/common";
import { NgxMaskDirective } from "ngx-mask";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzFormlyFieldBuilder } from "./ngx-nz-formly-type-safe.model";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import {
  NzFormlyButtonComponent,
  NzFormlyFieldCheckboxComponent,
  NzFormlyFieldDatePickerComponent,
  NzFormlyFieldInputComponent,
  NzFormlyFieldRadioComponent,
  NzFormlyFieldSelectComponent,
  NzFormlyFieldSliderComponent,
  NzFormlyFieldSwitchComponent,
  NzFormlyFieldTextareaComponent,
  NzFormlyUploaderComponent,
} from "./components";
import {
  NzFormlyDefaultWrapperComponent,
  NzFormlyLabelWrapperComponent,
} from "./wrappers";

@NgModule({
  declarations: [
    NzFormlyFieldInputComponent,
    NzFormlyFieldTextareaComponent,
    NzFormlyFieldCheckboxComponent,
    NzFormlyFieldSwitchComponent,
    NzFormlyFieldSelectComponent,
    NzFormlyButtonComponent,
    NzFormlyFieldRadioComponent,
    NzFormlyFieldSliderComponent,
    NzFormlyUploaderComponent,
    NzFormlyFieldDatePickerComponent,
    NzFormlyLabelWrapperComponent,
    NzFormlyDefaultWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzSelectModule,
    NzRadioModule,
    NzSliderModule,
    NzUploadModule,
    NzDatePickerModule,
  ],
  providers: [NzFormlyFieldBuilder],
  exports: [FormlyModule],
})
export class NgxNzFormlyModule {}
