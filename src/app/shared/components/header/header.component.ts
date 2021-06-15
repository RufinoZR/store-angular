import { Component, HostListener } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { CartService } from "@core/services/cart/cart.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
	installEvent: any;
	total$: Observable<number>;

	constructor(
		private cartService: CartService
	) {
		this.total$ = this.cartService.cart$
			.pipe(
				map(products => products.length)
			);
	}
	@HostListener('window:beforeinstallprompt', ['$event'])
	onBeforeInstallPrompt(e: Event) {
		console.log(e);
		e.preventDefault();
		this.installEvent = e;
	}

	installByUser() {
		if (this.installEvent) {
			this.installEvent.prompt();
			this.installEvent.userChoice
				.then((rta: any) => {
					console.log(rta, "mmm...");
				});
		}
	}

}
