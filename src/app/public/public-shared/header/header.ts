import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { MegaMenu } from "./mega-menu/mega-menu";

@Component({
  selector: 'app-header',
  imports: [RouterModule,MegaMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  showMenu: boolean = false;
  toggleMenu(show: boolean, e: Event) {
    console.log(show)
    this.showMenu = show;
  }
}
