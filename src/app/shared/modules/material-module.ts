import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';



const modules = [MatInputModule  , MatCheckboxModule,ReactiveFormsModule ,  CommonModule]

@NgModule({
  declarations: [],
  imports: modules ,
  exports: modules,
})
export class MaterialModule { }
