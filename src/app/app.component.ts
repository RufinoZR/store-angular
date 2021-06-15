import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { isPlatformBrowser } from "@angular/common";
import { SwUpdate } from "@angular/service-worker";
import { AngularFireMessaging } from "@angular/fire/messaging";
import {AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

declare var gtag: any;
interface Token {
	token: string | null;
}

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'store-angular';
	private  tokensCollections: AngularFirestoreCollection<Token>;

	constructor(
		private router: Router,
		@Inject(PLATFORM_ID) private platformId: Object,
		private swUpdate: SwUpdate,
		private messaging: AngularFireMessaging,
		private angularFireStorage: AngularFirestore
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
		this.tokensCollections = this.angularFireStorage.collection<Token>('tokens');
	}

	ngOnInit(): void {
		this.updatePWA();
		this.requestPermission();
		this.listenNotifications();
	}

	updatePWA() {
		this.swUpdate.available
			.subscribe((value) => {
				console.log('update:', value);
				window.location.reload();
			});
	}

	requestPermission() {
		this.messaging.requestToken
			.subscribe((token) => {
				console.log(token);
				this.tokensCollections.add({ token });
			});
	}

	listenNotifications() {
		this.messaging.messages
			.subscribe(message => {
				console.log(message);
			});
	}
}
