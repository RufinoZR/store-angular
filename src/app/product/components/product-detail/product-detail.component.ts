import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from "../../../core/services/products/products.service";
import { ProductModel } from "../../../core/models/product/product.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  product = {} as ProductModel;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product =>{
        this.product = product;
      });
  }
}
