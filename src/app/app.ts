import { Component, inject, OnInit,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from '@app/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  implements OnInit {

  langService= inject(TranslationService);

  ngOnInit(): void {  
    this.langService.setDefaultLang('ar');
  }
}
