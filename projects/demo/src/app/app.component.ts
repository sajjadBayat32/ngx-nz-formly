import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NzFormlyFieldBuilder } from 'ngx-nz-formly';

interface DemoModel {
  firstName: string;
  bio: string;
  agree: boolean;
  notifications: boolean;
  gender: string;
  city: string;
  budget: number;
  birthDate: Date;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form = new FormGroup({});
  model: Partial<DemoModel> = {};
  fields: FormlyFieldConfig[] = this.buildFields();

  private buildFields(): FormlyFieldConfig[] {
    const fb = new NzFormlyFieldBuilder<DemoModel>();
    return [
      fb.input('firstName', {
        props: { label: 'First name', required: true, minLen: 3 },
        validators: { validation: ['minLen'] }
      }),
      fb.textarea('bio', {
        props: { label: 'Bio', rows: 3 }
      }),
      fb.checkbox('agree', {
        props: { label: 'I agree to the terms' }
      }),
      fb.switch('notifications', {
        props: { label: 'Enable notifications' }
      }),
      fb.radio('gender', {
        props: {
          label: 'Gender',
          nzOptions: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]
        }
      }),
      fb.select('city', {
        props: {
          label: 'City',
          nzAllowClear: true,
          nzOptions: [
            { label: 'Tehran', value: 'thr' },
            { label: 'Shiraz', value: 'shz' },
            { label: 'Tabriz', value: 'tbz' }
          ]
        }
      }),
      fb.slider('budget', {
        props: { label: 'Budget', nzMin: 0, nzMax: 1000, nzStep: 50 }
      }),
      fb.datePicker('birthDate', {
        props: { label: 'Birth date' }
      }),
      fb.button({
        props: {
          text: 'Submit',
          click: () => alert(JSON.stringify(this.model, null, 2))
        }
      })
    ];
  }
}
