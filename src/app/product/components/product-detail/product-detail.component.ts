import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { ProductsService } from "@core/services/products/products.service";
import { ProductModel } from "@core/models/product/product.model";

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

	product$: Observable<ProductModel>;

	constructor(
		private route: ActivatedRoute,
		private productsService: ProductsService
	) { }

	ngOnInit() {
		this.product$ = this.route.params
			.pipe(
				switchMap((params: Params) => {
					return this.productsService.getProduct(params.id);
				})
			);
		this.getRandomUsers();
		this.getFile();
	}

	getRandomUsers() {
		this.productsService.getRandomUsers()
			.subscribe(
				users => {
					console.log(users);
				},
				error => {
					console.error(error);
				}
			);
	}

	getFile() {
		this.productsService.getfile()
			.subscribe(content => {
				console.log(content);
			})
	}
}
