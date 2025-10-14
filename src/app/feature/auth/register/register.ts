import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



import { SharedModule } from '@app/shared';
import { ValidationService } from '@app/services';

@Component({
  selector: 'app-register',
  imports: [SharedModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
 form: FormGroup;
  isPasswordVisible = signal<boolean>(false);
  isRepeatPasswordVisible = signal<boolean>(false);

  private readonly formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.initFormModels();
  }

  signUp(): void {
    if (this.form.valid) {
      console.log('Form Value', this.form.value);
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }

  
  toggleRepeatPasswordVisibility(): void {
    this.isRepeatPasswordVisible.set(!this.isRepeatPasswordVisible());
  }

  private initFormModels(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
      acceptTerms: [false, Validators.required]
    },{
      validators : ValidationService.mustMatch('password','repeatPassword')
    });
  }
}
