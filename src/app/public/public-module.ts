import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing-module';
import { Public } from './public';
import { Header } from "./public-shared/header/header";
import { Footer } from "./public-shared/footer/footer";


@NgModule({
  declarations: [Public],
  imports: [
    CommonModule,
    PublicRoutingModule,
    Header,
    Footer
  ]
})
export class PublicModule { }
