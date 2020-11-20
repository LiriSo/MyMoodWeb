import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-tell-us',
  templateUrl: './tell-us.component.html',
  styleUrls: ['./tell-us.component.css']
})
export class TellUsComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    text: ''
  };
    invalidSubmit: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value) {
      console.log(value);
   }

}
