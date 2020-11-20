import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CartService } from '../../serv/cart.service';
import { SelectItemService } from '../../serv/select-item.service';
import { FavService } from '../../serv/fav.service';
import { Item } from '../../item';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers: [SelectItemService]
})
export class PurchaseComponent implements OnInit {

  singleItem: Item;
  state: boolean; //true=cart, false=single item purchase
  items = [];
  currItem;
  count: number = 0;
  discount: number = 0;
  askToFav:boolean = false;
  user = {
    name: '',
    email: '',
    phone: '',
    adress: '',
    city: '',
    shipping: '',
    items: [],
    total: 0
  };
  coupon = {
    code: '',
    discount: 0,
    min: 0,
    valid: false
  };
  shippingMethod;
  selectedMethod = {
    desc: '',
    price: 0,
    name: '',
    time: ''
  };
  freeShipping = -1;
  invalidSubmit: boolean = false;

  constructor(private cartService: CartService,
    private selectService: SelectItemService,
    private route: ActivatedRoute,
    private favService: FavService) {
    this.route.params.subscribe(params => {
        if (params['state']=="cart")
          this.state = false;
        else this.state = true;
        if(this.state) { //not buy spesific item
          const itemId = params['itemId'];
          this.selectService.getItem(itemId).subscribe( product =>{
            this.singleItem = new Item(product, params['size']);
          });
        }
        else this.updateCart();
      });
      console.log(this.singleItem);
    this.selectService.getShippingMethods().subscribe(methods => {
      this.shippingMethod = methods;
      this.selectedMethod=this.shippingMethod[0];
    });
    }


  ngOnInit(): void {

  }

  onSubmit(value) {
    this.user = value;
      this.user.items = this.items;
      this.user.total = this.total();
      console.log(value);
   }

  countItems() {
    if (this.state)
      return this.singleItem?.quantity;
    var count: number =0;
    for (let i of this.items) {
      count += Number(i.quantity);
    }
    return count;
  }

  updateCart() {
    this.items=this.cartService.getItems();
    // console.log(this.items);
    // this.total = this.cartService.getTotal();
  }

  sumItems():number {
    if (this.state)
      return this.singleItem?.quantity*this.singleItem?.product.f_price;
    var sum =0, total =0 ;
    for (let i of this.items) {
      sum += i.product.f_price*i.quantity;
    }
    return sum;
  }
  beforeCoupon() : number {
    if (this.state)
      return this.singleItem?.quantity*this.singleItem?.product.c_price;
    var total =0 ;
    for (let i of this.items) {
      total += i.product.c_price*i.quantity;
    }
    return total;
  }

  total() : number {
    let total = this.beforeCoupon()*(1-this.discount);
    this.validChanged(total);
    return total;
  }

  addToFav(item) {
    console.log(item);//not add to fav shomehow... need to FIX
      this.favService.addToFav(item.product);

  }

  checkCoupon(code: string) {
    this.selectService.getCoupon(code).subscribe( item =>{
      if (item!=null) {
        this.coupon.discount=item.discount;
        this.coupon.min=item.min;
        this.checkCouponValid();
      }
    });
    this.coupon.code=code;
    // this.coupon.discount=this.selectService.getCoupon(this.coupon.code);

      // .subscribe( coupon =>{
      //   console.log(coupon);
      //   if (coupon!=null)
      //     this.coupon.discount = coupon.discount;
      // });
  }

  checkCouponValid() {
    if (this.coupon.code!='')
      if (this.beforeCoupon()>this.coupon.min) {
        this.coupon.valid = true;
        this.discount=this.coupon.discount;
      }

      else
        this.coupon.valid = false;
  }


  remove(item) {
    this.items=this.arrayRemove(this.items,item);
    console.log(this.items);
  }

  arrayRemove(arr, value) {
    return arr.filter(function(ele){
      return ele.product.id != value.product.id;
    });
  }

  validChanged(total: number) {
    this.checkCouponValid();
    this.updateShippingCost(total);
    this.checkCouponValid();
    this.updateShippingCost(total);
  }

  updateShippingCost(total: number) {
    if (this.selectedMethod.name == "דואר רשום") {
      if (total>249) {
        this.freeShipping = 0;
        this.selectedMethod.price = 0;
      }
      else {
        this.freeShipping = 249-total;
        this.selectedMethod.price = 19.90;
      }
    }
    if (this.selectedMethod.name == "דואר שליחים") {
      if (total>499) {
        this.freeShipping = 0;
        this.selectedMethod.price = 0;
      }
      else {
        this.freeShipping = 499-total;
        this.selectedMethod.price = 59.90;
      }
    }
  }
}
