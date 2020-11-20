import { Component, OnInit } from '@angular/core';
import { CartService } from '../../serv/cart.service';
import { FavService } from '../../serv/fav.service';
import { Item } from '../../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  currItem;
  total = 0;
  askToFav:boolean = false;

  constructor(private cartService: CartService,
  private favService: FavService) {
        this.updateCart();
   }

  ngOnInit(): void {
  }


  remove(item) {
    this.cartService.removeItem(item);
    this.updateCart();
  }

  addToFav(item) {
    this.favService.addToFav(item.product);
  }

  changeQuantity (item) {
    this.cartService.changeQuantity(item);
    this.updateCart();
  }

  sumItems():number {
    var sum =0, total =0 ;
    for (let i of this.cartItems) {
      sum += i.product.f_price*i.quantity;
      total += i.product.c_price*i.quantity;
    }
    this.total=total;
    return sum;
  }

  updateCart() {
    this.cartItems=this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  isFav(product): boolean {
    return this.favService.isFav(product);
  }

  countItems() {
    let count = 0;
    this.cartService.count().subscribe( itemsOnCart =>
      count = itemsOnCart);
    
  }
}
