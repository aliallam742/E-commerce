import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './materials/material-module';

const moduels= [CommonModule,ReactiveFormsModule,MaterialModule ]

@NgModule({
  imports:moduels,
  exports:moduels
})
export class SharedModule { }
