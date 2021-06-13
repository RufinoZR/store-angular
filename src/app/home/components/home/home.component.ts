import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";
import Swiper from 'swiper';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements AfterViewInit{
	mySwiper: Swiper;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object
	) { }

	ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.mySwiper = new Swiper('.swiper-container')
		}
	}

}
