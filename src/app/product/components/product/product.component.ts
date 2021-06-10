import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartService } from "@core/services/cart/cart.service";

import { ProductModel } from "@core/models/product/product.model";

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.sass']
})
export class ProductComponent {
	@Input() product: ProductModel;
	@Output() productClicked: EventEmitter<any> = new EventEmitter();

	constructor(
		private cartService: CartService
	) {}


	addCart(): void {
		this.cartService.addCart(this.product);
	}
}
