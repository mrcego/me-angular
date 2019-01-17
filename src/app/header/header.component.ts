import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconSpanishURI: string;
  iconEnglishURI: string;
  pointerSpanish: string;
  pointerEnglish: string;

  constructor(private translate: TranslateService) {
    this.setLangOption('es');
  }

  ngOnInit() {
  }

  setLangVersion(lang: string) {
    this.translate.use(lang);
    this.setLangOption(lang);
  }

  setLangOption(lang: string) {
    switch (lang) {
      case 'es':
        this.iconSpanishURI = './assets/spain-icon-disabled.png';
        this.iconEnglishURI = './assets/usa-icon.png';
        this.pointerSpanish = 'default';
        this.pointerEnglish = 'pointer';
        break;
      case 'en':
        this.iconSpanishURI = './assets/spain-icon.png';
        this.iconEnglishURI = './assets/usa-icon-disabled.png';
        this.pointerEnglish = 'default';
        this.pointerSpanish = 'pointer';
        break;
    }
  }

}
