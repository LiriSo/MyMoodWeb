import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private countItmes:Subject<number> = new BehaviorSubject<number>(0);
  items = [];

  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('cart'))
      {this.items = JSON.parse(this.cookieService.get('cart'));}
  }

  addToCart(product, size: string) {
    let addItem: boolean = true;
    for (let i of this.items) {
      if (product.id==i.product.id && size==i.size) {
        if (i.quantity==i.availableToPurchase.length)
          return false;
        i.quantity++;
        addItem = false;
        break;
      }
    }
    if (addItem) {
      this.items.push(new Item (product,size));
    }
    this.updateCookies(this.items);
    return true;
    }

  getItems() {
      return this.items;
    }

    count() {
      return this.countItmes.asObservable();
    }

    getTotal() {
        var total =0 ;
        for (let i of this.items) {
          total += i.product.c_price*i.quantity;
        }
        return total;
      }

      clearCart() {
      this.items = [];
      this.updateCookies(this.items);
    }

      removeItem(item) {
        this.items = this.arrayRemove(this.items,item);
          this.updateCookies(this.items);
        }

    updateCookies(items) {
      this.cookieService.set('cart', JSON.stringify(items));
      this.updateCount();
    }

    updateCount() {
      var count: number =0;
      for (let i of this.items) {
        count += Number(i.quantity);
      }
      this.countItmes.next(count);
    }

    changeQuantity(item) {
      for (let i of this.items) {
        if (item.product.id==i.product.id && item.size==i.size) {
          i.quantity=item.quantity;
          break;
        }
      }
      this.updateCookies(this.items);
    }


    arrayRemove(arr, value) {
      return arr.filter(function(ele){
        return ele != value;
      });
    }
}
