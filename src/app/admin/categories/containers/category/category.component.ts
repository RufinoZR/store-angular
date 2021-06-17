import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";

import { CategoriesService } from "@core/services/categories/categories.service";
import { CategoryModel } from "@core/models/category/category.model";

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
	category: CategoryModel;


	constructor(
		private categoriesService: CategoriesService,
		private router: Router,
		private storage: AngularFireStorage,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
			.subscribe((params: Params) => {
				if (params.id) {
					this.getCategory(params.id);
				}
			});
	}

	createCategory(data: CategoryModel) {
		this.categoriesService.createCategory(data)
			.subscribe(rta => {
				console.log(rta, "rta");
				this.router.navigate(['admin/category']).then()
			});
	}
	updateCategory(data: CategoryModel) {
		this.categoriesService.updateCategory(this.category._id, data)
			.subscribe(rta => {
				console.log(rta, "rta");
				this.router.navigate(['admin/category']).then()
			});
	}

	private getCategory(id: string) {
		this.categoriesService.getCategory(id)
			.subscribe(category => {
				this.category = category;
				// this.form.patchValue(category);
				console.log(category);
			});
	}

}
