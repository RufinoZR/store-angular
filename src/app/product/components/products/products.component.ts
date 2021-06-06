import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";

import { ProductsService } from "../../../core/services/products/products.service";

import { ProductModel } from "../../../core/models/product/product.model";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  clickProduct(e: any): void {
    console.log(e);
  }
}
