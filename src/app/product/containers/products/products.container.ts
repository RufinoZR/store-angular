import { Component, OnInit } from '@angular/core';

import { ProductsService } from "@core/services/products/products.service";

import { ProductModel } from "@core/models/product/product.model";


@Component({
	selector: 'app-products',
	templateUrl: './products.container.html',
	styleUrls: ['./products.container.sass']
})

export class ProductsContainer implements OnInit {
	// los container se encargan de hacer fetch a los datos de una api
	// los components solo tienen que interactuar con la información mediante inputs y outputs
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
