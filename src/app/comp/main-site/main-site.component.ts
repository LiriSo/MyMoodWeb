import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectItemService } from '../../serv/select-item.service';
import { FavService } from '../../serv/fav.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css'],
  providers: [SelectItemService]
})
export class MainSiteComponent implements OnInit {
  @ViewChild('nav1', {read: DragScrollComponent, static: true}) ds1: DragScrollComponent;
  @ViewChild('nav2', {read: DragScrollComponent, static: true}) ds2: DragScrollComponent;
  @ViewChild('nav3', {read: DragScrollComponent, static: true}) ds3: DragScrollComponent;
  @ViewChild('nav4', {read: DragScrollComponent, static: true}) ds4: DragScrollComponent;

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

    moveLeft3() {
      this.ds3.moveLeft();
    }

    moveRight3() {
      this.ds3.moveRight();
    }

    moveLeft4() {
      this.ds4.moveLeft();
    }

    moveRight4() {
      this.ds4.moveRight();
    }

  blackItems;
  animalItems;
  studyItems;
  natureItems;
  listOfTags;
  small = false;
  successfulyAdded;


  constructor(private selectService: SelectItemService,
    private favService: FavService) {
    let tags = [];
    let colors = ["שחור"];
    this.selectService.getItemsFilter(tags, colors).subscribe( items =>{
      this.blackItems = items;
      });
    tags = ["לימודים"];
    colors = [];
    this.selectService.getItemsFilter(tags, colors).subscribe( items =>{
      this.studyItems = items;
      });
    tags = ["טבע"];
    this.selectService.getItemsFilter(tags, colors).subscribe( items =>{
        this.natureItems = items;
        });
    tags = ["פנאי"];
    this.selectService.getItemsFilter(tags, colors).subscribe( items =>{
        this.animalItems = items;
        });
        this.selectService.getTags().subscribe( tags =>{
              this.listOfTags = tags;
            });
      }

  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.small = true;
    }
  }

  isFav(product): boolean {
    return this.favService.isFav(product);
  }

  addToFav (product) {
    this.favService.addToFav(product);
    this.successfulyAdded = true;
  }

  remove (id) {
    this.favService.removeProduct(id);
    this.successfulyAdded = false;
  }




}
