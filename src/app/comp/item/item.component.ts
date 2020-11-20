import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SelectItemService } from '../../serv/select-item.service';
import { CartService } from '../../serv/cart.service';
import { DragScrollModule, DragScrollComponent } from 'ngx-drag-scroll';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [SelectItemService]
})
export class ItemComponent implements OnInit {
  @ViewChild('nav1', {read: DragScrollComponent, static: true}) ds1: DragScrollComponent;
  @ViewChild('nav2', {read: DragScrollComponent, static: true}) ds2: DragScrollComponent;


  item;
  sameTagItems;
  category;
  listOfSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  chosenSize = '';
  alartNoSizeChoosen: boolean = false;
  successfulyAdded: boolean = false;
  limitQuantity: boolean = false;
  notInStock = false;
  lowOnStock = [false,0];
  page = 1;
  showSpinner: boolean = true;
  aboutCat = "";
  sizeOnCart = '';

  constructor(  private selectService: SelectItemService,
    private cartService: CartService,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      const itemId = params['itemId'];
      this.selectService.getItem(itemId).subscribe( item =>{
        this.item = item;
        this.selectService.getTag(item.tag_1).subscribe( tag => {
          this.aboutCat = tag?.desc;
           });
        let colors = [];
        let tags = [item.tag_1];
        this.selectService.getItemsFilter(tags, colors).subscribe( items =>{
          this.sameTagItems = items;
          });
        });
      });
    }

   ngOnInit() {
   }



   itemsOnStock (size: string) {
     switch (size) {
      case 'XS': return this.item?.size_XS;
      case 'S': return this.item?.size_S;
      case 'M': return this.item?.size_M;
      case 'L': return this.item?.size_L;
      case 'XL': return this.item?.size_XL;
      case 'XXL': return this.item?.size_XXL;
    }
   }

  inStock () {
      if (this.itemsOnStock('XS')>0 || this.itemsOnStock('S')>0 || this.itemsOnStock('M')>0
    || this.itemsOnStock('L')>0 || this.itemsOnStock('XL')>0 || this.itemsOnStock('XXL')>0)
        return true;
    return false;
  }


  lowStock(size: string) {
    if(this.itemsOnStock(size)<4)
      this.lowOnStock=[true,this.itemsOnStock(size)]
    else this.lowOnStock=[false,0]
  }

  addToCart () {
    if (this.cartService.addToCart(this.item, this.chosenSize)) {
      this.successfulyAdded = true;
      this.sizeOnCart=this.chosenSize;
    }
    else
      this.limitQuantity = true;
  }

  noChoseSize() {
    this.alartNoSizeChoosen = true;
  }

  moveLeft1() {
    this.ds1.moveLeft();
  }

  moveRight1() {
    this.ds1.moveRight();
  }

  moveLeft2() {
    this.ds2.moveLeft();
  }

  moveRight2() {
    this.ds2.moveRight();
  }



}
