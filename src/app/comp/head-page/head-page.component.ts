import { Component, OnInit } from '@angular/core';
import { CartService } from '../../serv/cart.service';
import { FavService } from '../../serv/fav.service';
import { SelectItemService } from '../../serv/select-item.service';


@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.css'],
  providers: [SelectItemService]
})
export class HeadPageComponent implements OnInit {

myMoodLogoUrl = "https://github.com/LiriSo/mymood/blob/master/MYMOODLOGO.png?raw=true";
cartItems = 0;
favItems = 0;
total = 0;



  constructor(private selectService: SelectItemService,
    private cartService: CartService,
  private favService: FavService) {
    this.cartService.count().subscribe( itemsOnCart =>
      this.cartItems = itemsOnCart);
    this.favService.count().subscribe( itemsOnFav =>
      this.favItems = itemsOnFav);

   }

  ngOnInit(): void{
    this.cartService.updateCount();
    this.favService.updateCount();
  }



}
