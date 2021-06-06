import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { CartService } from "../../../core/services/cart/cart.service";

import { ProductModel } from "../../../core/models/product/product.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
