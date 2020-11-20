import { Component, OnInit } from '@angular/core';
import { SelectItemService } from '../../serv/select-item.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FavService } from '../../serv/fav.service';
import { CartService } from '../../serv/cart.service';


@Component({
  selector: 'app-items-show',
  templateUrl: './items-show.component.html',
  styleUrls: ['./items-show.component.css'],
  providers: [SelectItemService]
})


export class ItemsShowComponent implements OnInit {
  products;
  listOfTags;
  listOfColors;
  selectedTags=[];
  selectedColors=[];
  showSpinner: boolean = true;
  isSale: boolean = false;
  successfulyAdded: boolean = false;
  spesificTag='';


  constructor(private selectService: SelectItemService,
    private favService: FavService,
    private route: ActivatedRoute) {

    this.selectService.getItems().subscribe( products =>{
      this.products = products;
    });
    this.selectService.getTags().subscribe( tags =>{
      this.listOfTags = tags;
      this.route.params.subscribe(params => {
        this.spesificTag = params['category'];
        if(this.spesificTag=="sale") {
          this.setColor("שחור");
          this.isSale=true;
        }
        else {
          for (let t of this.listOfTags) {
            if (t.tag==this.spesificTag) {
              this.setTag(this.spesificTag);
            }
          }
        }


      });
    });
    this.selectService.getListOfColors().subscribe( colors =>{
      this.listOfColors = colors;
    });




  }

  ngOnInit() {

  }

    setTag(tag: string) {
      if (this.selectedTags.indexOf(tag)!== -1)  //already selected
        this.selectedTags=this.arrayRemove(this.selectedTags,tag);
      else this.selectedTags.push(tag);
      this.selectService.getItemsFilter(this.selectedTags, this.selectedColors).subscribe( products =>{
      this.products = products;
      });
    }

    setColor(color: string) {
      if (this.selectedColors.indexOf(color)!== -1) //already selected
        this.selectedColors=this.arrayRemove(this.selectedColors,color);
      else this.selectedColors.push(color);
      this.selectService.getItemsFilter(this.selectedTags, this.selectedColors).subscribe( products =>{
      this.products = products;
      });
      this.isSale=false;
    }

    filterArr(arr :Array <any> , filter: string) {
      if (arr.indexOf(filter)!== -1) //already selected
        arr=this.arrayRemove(arr,filter);
      else arr.push(filter);
      this.selectService.getItemsFilter(this.selectedTags, this.selectedColors).subscribe( products =>{
      this.products = products;
      });
    }

    addToFav (product) {
      this.favService.addToFav(product);
      this.successfulyAdded = true;
    }

    remove (id) {
      this.favService.removeProduct(id);
      this.successfulyAdded = false;
    }

    isFav(product): boolean {
      return this.favService.isFav(product);
    }


    arrayRemove(arr, value) {
      return arr.filter(function(ele){
        return ele != value;
      });
    }
}
