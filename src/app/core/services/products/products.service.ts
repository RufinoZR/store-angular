import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../../../environments/environment';

import { ProductModel } from "../../models/product/product.model";

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
}
