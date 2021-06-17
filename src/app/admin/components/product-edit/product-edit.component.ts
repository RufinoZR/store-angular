import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

import { ProductsService } from "@core/services/products/products.service";
import { CategoriesService } from "@core/services/categories/categories.service";

import { CategoryModel } from "@core/models/category/category.model";

import { MyValidators } from "@utils/validators";

@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {

	form: FormGroup;
	id = '';
	categories$: Observable<CategoryModel[]>

	constructor(
		private formBuilder: FormBuilder,
		private productsService: ProductsService,
		private categoriesService: CategoriesService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		this.buildForm();
	}

	ngOnInit(): void {
		this.getCategories();
		this.activatedRoute.params.subscribe((params: Params) => {
			this.id = params.id;
			this.productsService.getProduct(this.id)
				.subscribe(product => {
					console.log(product, 'product');
					this.form.patchValue(product);
				});
		});
	}

	private buildForm(): void {
		this.form = this.formBuilder.group({
			title: ['', [Validators.required, Validators.minLength(4)]],
			price: [0, [Validators.required, MyValidators.isPriceValid]],
			image: ['', Validators.required],
			description: ['', [Validators.required, Validators.minLength(10)]],
			category_id: ['', [Validators.required]],
		});
	}

	saveProduct(event: Event): void {
		event.preventDefault();
		if (this.form.valid) {
			this.productsService.updateProduct(this.id, this.form.value)
				.subscribe(() => {
					this.router.navigate(['admin/products']).then()
				});
		}
		console.log(this.form.value);
	}

	private getCategories() {
		this.categories$ = this.categoriesService.getAllCategories();
	}

	get priceField() {
		return this.form.get('price');
	}

}
