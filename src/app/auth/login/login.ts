import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material-module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MaterialModule ,],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initFormModels();
  }

  signIn(): void {
    if (this.form.valid) {
      console.log('form value', this.form.value);
    }
  }

  navigateToForgetPasswordPage(): void {
    this.router.navigateByUrl('forget-password');
  }

  private initFormModels(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }
}
