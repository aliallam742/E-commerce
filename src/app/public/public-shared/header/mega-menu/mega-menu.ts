import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  imports: [],
  templateUrl: './mega-menu.html',
  styleUrl: './mega-menu.scss'
})
export class MegaMenu {
  showMenu = input<boolean>(false);
}
