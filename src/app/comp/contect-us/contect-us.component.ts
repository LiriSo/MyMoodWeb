import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-contect-us',
  templateUrl: './contect-us.component.html',
  styleUrls: ['./contect-us.component.css']
})
export class ContectUsComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    phone: '',
    text: ''
  };
  invalidSubmit: boolean = false;

  onSubmit(value) {
      console.log(value);
   }

  constructor() {
  }

  ngOnInit(): void {
  }

}
