import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { CartService } from "@core/services/cart/cart.service";

import { ProductModel } from "@core/models/product/product.model";

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.sass']
})
export class OrderComponent {
	products$: Observable<ProductModel[]>;
	form: FormGroup;

	constructor(
		private cartService: CartService,
		private formBuilder: FormBuilder
	) {
		this.products$ = this.cartService.cart$;
		this.buildForm();
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			name: ['', Validators.required],
			address: this.formBuilder.array([])
		});
	}

	addAddressField() {
		this.addressField.push(this.createAddressField());
	}

	private createAddressField() {
		return this.formBuilder.group({
			zip: ['', Validators.required],
			text: ['', Validators.required]
		});
	}

	save() {
		console.log(this.form.value);
	}

	get addressField() {
		return this.form.get('address') as FormArray;
	}
}
