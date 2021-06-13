import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { isPlatformBrowser } from "@angular/common";

declare var gtag: any;

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'store-angular';

	constructor(
		private router: Router,
		@Inject(PLATFORM_ID) private platformId: Object

	) {
		if (isPlatformBrowser(this.platformId)) {

			const navEndEvents$ =	this.router.events
				.pipe(
					filter(event => event instanceof NavigationEnd)
				);
			navEndEvents$.subscribe((event: NavigationEnd | any) => {
				console.log(event.urlAfterRedirects);
				if (gtag && event) {
					gtag('config', 'G-PGDQQNMRHG', {
						page_path: event.urlAfterRedirects
					});
				}
			});
		}
	}
}
