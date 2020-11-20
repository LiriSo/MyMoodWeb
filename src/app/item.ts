export class Item {
  product;
  size: string;
  quantity: number;
  picUrl: string;
  availableToPurchase = [0];

  constructor(p, s, q=1) {
    this.product=p;
    this.size=s;
    this.quantity=q;
    this.picUrl = "https://github.com/LiriSo/mymood/blob/master/" +
     p.id.toString() + ".PNG?raw=true";
    this.availableToPurchase = this.availableArr();
  }


  itemsOnStock (size: string) {
    switch (size) {
     case 'XS': return this.product.size_XS;
     case 'S': return this.product.size_S;
     case 'M': return this.product.size_M;
     case 'L': return this.product.size_L;
     case 'XL': return this.product.size_XL;
     case 'XXL': return this.product.size_XXL;
     case 'XXXL': return this.product.size_XXXL;
   }
  }

 inStock () {
     if (this.itemsOnStock('XS')>0 || this.itemsOnStock('S')>0 || this.itemsOnStock('M')>0
   || this.itemsOnStock('L')>0 || this.itemsOnStock('XL')>0 || this.itemsOnStock('XXL')>0
 || this.itemsOnStock('XXXL')>0)
       return true;
   return false;
 }


 lowStock(size: string) {
   if(this.itemsOnStock(size)<4)
     return [true,this.itemsOnStock(size)]
   else return [false,0]
 }

 availableArr() {
   var arr = [].constructor(this.itemsOnStock(this.size));
   for(let i=0; i<arr.length; i++) {
     arr[i]=i+1;
   }
   return arr;
 }
}
