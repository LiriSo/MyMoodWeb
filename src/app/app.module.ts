import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadPageComponent } from './comp/head-page/head-page.component';
import { FooterSiteComponent } from './comp/footer-site/footer-site.component';
import { MainSiteComponent } from './comp/main-site/main-site.component';
import { AboutComponent } from './comp/about/about.component';
import { ContectUsComponent } from './comp/contect-us/contect-us.component';
import { ReturnsComponent } from './comp/returns/returns.component';
import { PayInfoComponent } from './comp/pay-info/pay-info.component';
import { PurchaseComponent } from './comp/purchase/purchase.component';
import { ShippingInfoComponent } from './comp/shipping-info/shipping-info.component';
import { TellUsComponent } from './comp/tell-us/tell-us.component';
import { LirisComponent } from './comp/liris/liris.component';
import { CustomerServiceComponent } from './comp/customer-service/customer-service.component';
import { ItemComponent } from './comp/item/item.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ItemsShowComponent } from './comp/items-show/items-show.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './serv/cart.service';
import { CartComponent } from './comp/cart/cart.component';
import { FavComponent } from './comp/fav/fav.component';
import { TermsComponent } from './comp/terms/terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseDiscountComponent } from './comp/first-purchase-discount/first-purchase-discount.component';
import { SubmmitedSuccessfulyComponent } from './comp/submmited-successfuly/submmited-successfuly.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HeadPageComponent,
    FooterSiteComponent,
    MainSiteComponent,
    AboutComponent,
    ContectUsComponent,
    ReturnsComponent,
    PayInfoComponent,
    ShippingInfoComponent,
    TellUsComponent,
    LirisComponent,
    CustomerServiceComponent,
    ItemComponent,
    LoadingSpinnerComponent,
    ItemsShowComponent,
    CartComponent,
    FavComponent,
    PurchaseComponent,
    TermsComponent,
    PurchaseDiscountComponent,
    SubmmitedSuccessfulyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragScrollModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
