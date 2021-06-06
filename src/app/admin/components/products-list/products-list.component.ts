import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../../core/services/products/products.service";
import {ProductModel} from "../../../core/models/product/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  products: ProductModel[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe(rta => {
        if (rta) {
          this.products = this.products.filter(p => p.id !== id);
        } else {
          console.log(rta);
        }
      });
  }
}
