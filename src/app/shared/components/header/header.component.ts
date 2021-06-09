import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import {Observable} from "rxjs";

import { CartService } from "@core/services/cart/cart.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

	total$: Observable<number>;

	constructor(
		private cartService: CartService
	) {
		this.total$ = this.cartService.cart$
			.pipe(
				map(products => products.length)
			);
	}

}
