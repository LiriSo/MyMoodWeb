import { Component, OnInit } from '@angular/core';
import { SelectItemService } from '../../serv/select-item.service';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css'],
  providers: [SelectItemService]
})
export class ShippingInfoComponent implements OnInit {
    shippingMethod;

  constructor(private selectService: SelectItemService) {
    this.selectService.getShippingMethods().subscribe(methods => {
      this.shippingMethod = methods;
    });
  }

  ngOnInit(): void {
  }

}
