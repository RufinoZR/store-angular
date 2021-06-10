import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

import { ProductsService } from './products.service';
import {environment} from "../../../../environments/environment";

fdescribe('ProductsService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let service: ProductsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		});
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(ProductsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('test for getAllProducts', () => {
		it('should return products',  () => {
			// arrange
			const expectData = [
				{
					id: 1,
					title: 'test',
					price: 1233,
					description: 'asdf',
					image: 'img/asdf.png'
				},
				{
					id: 2,
					title: 'test',
					price: 1233,
					description: 'asdf',
					image: 'img/asdf.png'
				}
			];
			let dataError, dataResponse;
			// act
			service.getAllProducts()
				.subscribe(respnse => {
					dataResponse = respnse;
				}, error => {
					dataError = error
				});
			const req = httpTestingController.expectOne(`${environment.urlApi}products`);
			req.flush(expectData);
			// assert
			// @ts-ignore
			expect(dataResponse.length).toEqual(2);
			expect(req.request.method).toEqual('GET');
			expect(dataError).toBeUndefined();
		});
	});
});
