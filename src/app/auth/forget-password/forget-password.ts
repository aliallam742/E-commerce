import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  imports: [],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {
  private readonly location = inject(Location);

  back(): void {
     this.location.back();
  }

}
