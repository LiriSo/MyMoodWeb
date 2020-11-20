import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private countProducts:Subject<number> = new BehaviorSubject<number>(0);
  products = [];

  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('fav'))
      this.products = JSON.parse(this.cookieService.get('fav'));
  }

  addToFav(p) {

    let addProduct: boolean = true;
    for (let i of this.products) {
      if (p.id==i.id) {
        this.removeProduct(p);
        addProduct = false;
        break;
      }
    }
    if (addProduct) {
      var product = {
          id: p.id,
          name: p.name,
          color: p.color
        }
      this.products.push(product);
      this.updateCookies();
    }
    }

  getProducts() {
      return this.products;
    }

    count() {
      return this.countProducts.asObservable();
    }


      clearFav() {
      this.products = [];
      this.updateCookies();
    }

      removeProduct(product) {
        this.products = this.arrayRemove(this.products,product);
          this.updateCookies();
        }

        isFav(product) {
          for (let i of this.products) {
            if (i.id==product.id)
            return true;
          }
          return false;
        }

    updateCookies() {
      this.cookieService.set('fav', JSON.stringify(this.products));
      this.updateCount();
    }

    updateCount () {
      this.countProducts.next(this.products.length);
    }

    arrayRemove(arr, value) {
      return arr.filter(function(ele){
        return (ele.id != value.id);
      }).filter(function(ele){
        return (ele != value);
      });
    }
}
