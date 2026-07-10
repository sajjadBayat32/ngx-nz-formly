import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzFormlySliderProps } from '../../ngx-nz-formly-props.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nz-formly-field-slider',
  templateUrl: './nz-formly-field-slider.component.html',
  styleUrls: [],
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, NzSliderModule]
})
export class NzFormlyFieldSliderComponent
  extends FieldType<FieldTypeConfig<NzFormlySliderProps>>
  implements OnInit
{
  private destroyRef = inject(DestroyRef);

  get fieldID() {
    return 'control-' + this.field.key;
  }

  ngOnInit() {
    this.onValueChange();
  }

  onValueChange() {
    this.formControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((value: string) => {
          if (typeof this.props?.change == 'function') {
            this.props.change(this.field, value);
          }
        })
      )
      .subscribe();
  }
}
