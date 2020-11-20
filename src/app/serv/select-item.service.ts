import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find , map } from 'rxjs/operators';
import { Tag } from '../tag';



@Injectable()
export class SelectItemService {
  itemsUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/items.json";
  tagsUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/tags.json";
  listOfTagsUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/list_of_tags.json";
  listOfColorsUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/list_of_colors.json";
  sizesUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/sizes.json";
  shippingUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/shipping.json";
  private couponUrl = "https://raw.githubusercontent.com/LiriSo/mymood/master/coupon.json";


  constructor(public httpClient: HttpClient) { }

  getItems() {
      return this.httpClient.get(this.itemsUrl);
  }

  getItemsFilter(filterTag: Array<any>, filterColor: Array<any>) {
    if (filterTag.length==0 && filterColor.length==0)
      return this.httpClient.get(this.itemsUrl);
    if (filterTag.length != 0 && filterColor.length == 0)
      return this.httpClient.get(this.itemsUrl)
      .pipe(map((items : Array<any>) => items
      .filter(item => (filterTag.indexOf(item.tag_1)!= -1 || filterTag.indexOf(item.tag_2)!= -1
      || filterTag.indexOf(item.tag_3)!= -1 || filterTag.indexOf(item.tag_4)!= -1
      ))));
    if (filterTag.length == 0 && filterColor.length != 0)
      return this.httpClient.get(this.itemsUrl)
      .pipe(map((items : Array<any>) => items
      .filter(item => (filterColor.indexOf(item.color)!= -1
      ))));
    return this.httpClient.get(this.itemsUrl)
      .pipe(map((items : Array<any>) => items
      .filter(item => (filterColor.indexOf(item.color)!= -1 &&
      (filterTag.indexOf(item.tag_1)!= -1 || filterTag.indexOf(item.tag_2)!= -1
      || filterTag.indexOf(item.tag_3)!= -1 || filterTag.indexOf(item.tag_4)!= -1)
    ))));
    }


  getListOfTags() {
    return this.httpClient.get(this.listOfTagsUrl);
  }

  getListOfColors() {
    return this.httpClient.get(this.listOfColorsUrl);
  }

  getTags() {
    return this.httpClient.get(this.tagsUrl);
  }

  getShippingMethods() {
    return this.httpClient.get(this.shippingUrl);
  }

  getItem(id: number){
    return this.getItems()
    .pipe(map((items : Array<any>) => items
    .find(item => item.id == id)));
  }

  getTag(tag :string){
    return this.getTags()
    .pipe(map((tags : Array<Tag>) => tags
    .find(t => (t.tag == tag))));
  }

  getItemsWithSimilarTags(tag :string){
    return this.getItems()
    .pipe(map((items : Array<any>) => items
    .filter(item => (item.tag_1)==tag || (item.tag_2)==tag ||
    (item.tag_3)==tag || (item.tag_4)==tag
  )));
  }

  getSizes(id: number) {
    return this.httpClient
    .get(this.sizesUrl)
    .pipe(map((items : Array<any>) => items
    .find(item => item.id == id)));
  }

  getCoupon (code: string) {
    return this.httpClient
    .get(this.couponUrl)
    .pipe(map((items : Array<any>) => items
    .find(item => item.code == code)));

    //
    // return this.httpClient
    // .get(this.couponUrl)
    // .pipe(map((items : Array<any>) => items
    // .find(item => item.code == code)));
  }


}
