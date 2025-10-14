import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SharedModule } from '@app/shared';

@Component({
  selector: 'app-forget-password',
  imports: [SharedModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {
  form: FormGroup;
  private readonly location = inject(Location);
  private readonly formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.initFormModels();
  }

  back(): void {
    this.location.back();
  }

  sendOTP(): void {
    if (this.form.valid) {
      // Call the server
      console.log('Form Value', this.form.value);
    }
  }

  private initFormModels(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
