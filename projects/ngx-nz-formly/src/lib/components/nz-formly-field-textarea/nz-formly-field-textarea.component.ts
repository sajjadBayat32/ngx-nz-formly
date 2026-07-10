import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormlyTextareaProps } from '../../ngx-nz-formly-props.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nz-formly-field-textarea',
  templateUrl: './nz-formly-field-textarea.component.html',
  styleUrls: [],
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, NzInputModule]
})
export class NzFormlyFieldTextareaComponent
  extends FieldType<FieldTypeConfig<NzFormlyTextareaProps>>
  implements OnInit
{
  private destroyRef = inject(DestroyRef);

  get fieldID() {
    return 'control-' + this.field.key;
  }

  get status() {
    return this.formControl.touched && this.formControl.invalid ? 'error' : '';
  }

  ngOnInit() {
    this.onValueChanges();
  }

  onValueChanges() {
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
