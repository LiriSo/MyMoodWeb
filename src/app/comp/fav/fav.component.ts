import { Component, OnInit } from '@angular/core';
import { FavService } from '../../serv/fav.service';


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favProducts = [];

  constructor(private favService: FavService) {

   }

  ngOnInit(): void {
    this.updateFavList();
  }

  getPicUrl(product) {
    return "https://github.com/LiriSo/mymood/blob/master/" +
     product.id.toString() + ".PNG?raw=true";
  }

  remove(product) {
    this.favService.removeProduct(product);
    this.updateFavList();
  }


  updateFavList() {
    this.favProducts=this.favService.getProducts();
  }



}
