import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon'


const modules = [MatInputModule  , MatCheckboxModule, MatIconModule]

@NgModule({
  declarations: [],
  imports: modules ,
  exports: modules,
})
export class MaterialModule { }
