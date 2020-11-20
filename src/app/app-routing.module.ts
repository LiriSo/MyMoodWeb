import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MainSiteComponent } from './comp/main-site/main-site.component';
import { AboutComponent } from './comp/about/about.component';
import { ContectUsComponent } from './comp/contect-us/contect-us.component';
import { ReturnsComponent } from './comp/returns/returns.component';
import { PayInfoComponent } from './comp/pay-info/pay-info.component';
import { ShippingInfoComponent } from './comp/shipping-info/shipping-info.component';
import { TellUsComponent } from './comp/tell-us/tell-us.component';
import { LirisComponent } from './comp/liris/liris.component';
import { CustomerServiceComponent } from './comp/customer-service/customer-service.component';
import { ItemComponent } from './comp/item/item.component';
import { ItemsShowComponent} from './comp/items-show/items-show.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { CartComponent } from './comp/cart/cart.component';
import { FavComponent } from './comp/fav/fav.component';
import { PurchaseComponent } from './comp/purchase/purchase.component';
import { TermsComponent } from './comp/terms/terms.component';
import { PurchaseDiscountComponent } from './comp/first-purchase-discount/first-purchase-discount.component';
import { SubmmitedSuccessfulyComponent } from './comp/submmited-successfuly/submmited-successfuly.component';



const routes: Routes = [
  {path:'', component: MainSiteComponent},
  {path:'about', component: AboutComponent},
  {path:'contect-us', component: ContectUsComponent},
  {path:'liris', component: LirisComponent},
  {path:'pay-info', component: PayInfoComponent},
  {path:'shipping-info', component: ShippingInfoComponent},
  {path:'tell-us', component: TellUsComponent},
  {path:'returns', component: ReturnsComponent},
  {path:'customer-service', component: CustomerServiceComponent},
  {path: 'items-show', component: ItemsShowComponent},
  {path: 'items-show/:category', component: ItemsShowComponent},
  {path:'item/:itemId', component: ItemComponent},
  {path:'loading-spinner', component: LoadingSpinnerComponent},
  {path: 'fav', component: FavComponent},
  {path: 'cart', component: CartComponent},
  {path: 'purchase/:state/:itemId/:size', component: PurchaseComponent},
  {path: 'purchase/:state', component: PurchaseComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'purchase-discount', component: PurchaseDiscountComponent},
  {path: 'submmited', component: SubmmitedSuccessfulyComponent}
]

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot( routes, {
   enableTracing: true,
  scrollPositionRestoration: 'top'
  })],
//  imports: [RouterModule.forRoot([
  //  { path: '', component: ItemsShowComponent },
    //{ path: 'item/:itemId', component: ItemComponent },
//])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
