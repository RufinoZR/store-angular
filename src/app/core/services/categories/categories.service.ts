import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { CategoryModel } from "@core/models/category/category.model";

import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	constructor(
		private http: HttpClient,
	) { }

	getAllCategories() {
		return this.http.get<CategoryModel[]>(`${environment.urlNico}categories/`);
	}

	getCategory(id: string) {
		return this.http.get<CategoryModel>(`${environment.urlNico}categories/${id}`)
	}

	createCategory(data: Partial<CategoryModel>) {
		return this.http.post<CategoryModel>(`${environment.urlNico}categories/`, data);
	}

	updateCategory(id: string, data: Partial<CategoryModel>) {
		return this.http.put<CategoryModel>(`${environment.urlNico}categories/${id}`, data);
	}

	checkCategory(name: string) {
		return this.http.post(`${environment.urlNico}categories/availability`, { name });
	}
}
