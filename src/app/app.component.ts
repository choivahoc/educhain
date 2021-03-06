import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-dashboard-page';
  constructor(public translate: TranslateService) {
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/vi|en/) ? 'en' : browserLang);
  }
}
