import { Component } from '@angular/core';
import { CartService } from './serv/cart.service';
import { FavService } from './serv/fav.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService]
})

export class AppComponent {
  title = 'website';
  showSpinner:boolean = true;
  ShowCookiesAlart: boolean;
  learnMore: boolean = false;

  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('cookieAlart'))
      this.ShowCookiesAlart = JSON.parse(this.cookieService.get('cookieAlart'));
    else
      this.ShowCookiesAlart = true;
  }

  hideCookies() {
    this.ShowCookiesAlart=false;
    this.cookieService.set('cookieAlart', "false");
  }
}
