import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from 'rxjs/operators';
import * as Sentry  from '@sentry/browser';

import { environment } from '../../../../environments/environment';

import { ProductModel } from "@core/models/product/product.model";

// ejemplo te tipado
interface User {
	email: string;
	gender: string;
	phone: string;
}

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(
		private http: HttpClient
	) { }

	getAllProducts() {
		return this.http.get<ProductModel[]>(`${environment.urlApi}products`);
	}

	getProduct(id: string) {
		return this.http.get<ProductModel>(`${environment.urlApi}products/${id}`);
	}

	createProduct(product: ProductModel) {
		return this.http.post(`${environment.urlApi}products`, product);
	}

	updateProduct(id: string, product: Partial<ProductModel>) {
		return this.http.put(`${environment.urlApi}products/${id}`, product)
	}

	deleteProduct(id: string) {
		return this.http.delete(`${environment.urlApi}products/${id}`);
	}

	// ejemplo de tipado en peticiones
	// retry intenta 1 y si falla vuelve a intentar 3 veces más
	getRandomUsers(): Observable<User[]> {
		return this.http.get('https://randomuser.me/api/?results=2')
			.pipe(
				retry(3),
				catchError(ProductsService.handleError),
				map((response: any) => response.results as User[])
			)
	}

	getfile() {
		return this.http.get('assets/files/test.txt', { responseType: 'text' });
	}

	private static handleError(error: HttpErrorResponse) {
		console.log(error);
		Sentry.captureException(error);
		return throwError('ups algo salio mal');
	}
}
