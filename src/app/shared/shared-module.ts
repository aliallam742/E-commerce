import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './materials/material-module';
import { TranslateModule } from '@ngx-translate/core';

const moduels= [CommonModule,ReactiveFormsModule,MaterialModule , TranslateModule]

@NgModule({
  imports:moduels,
  exports:moduels
})
export class SharedModule { }
