import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements AfterViewInit{
	mySwiper: Swiper | undefined;

	constructor() { }

	ngAfterViewInit(): void {
		this.mySwiper = new Swiper('.swiper-container')
	}

}
