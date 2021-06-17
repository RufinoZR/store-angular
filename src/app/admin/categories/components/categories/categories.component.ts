import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { CategoriesService } from "@core/services/categories/categories.service";

import { CategoryModel } from "@core/models/category/category.model";

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

	categories$: Observable<CategoryModel[]>;

	constructor(
		private categoriesService: CategoriesService
	) { }

	ngOnInit(): void {
		this.categories$ = this.categoriesService.getAllCategories();
	}

}
