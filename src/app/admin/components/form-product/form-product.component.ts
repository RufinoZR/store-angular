import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";

import { MyValidators } from "@utils/validators";

import { ProductsService } from "@core/services/products/products.service";
import { CategoriesService } from "@core/services/categories/categories.service";

import { CategoryModel } from "@core/models/category/category.model";

@Component({
	selector: 'app-form-product',
	templateUrl: './form-product.component.html',
	styleUrls: ['./form-product.component.sass']
})
export class FormProductComponent implements OnInit {
	form: FormGroup;
	image$: Observable<any>;
	categories$: Observable<CategoryModel[]>

	constructor(
		private formBuilder: FormBuilder,
		private productsService: ProductsService,
		private categoriesService: CategoriesService,
		private router: Router,
		private storage: AngularFireStorage
	) {
		this.buildForm();
	}

	// para un objeto es necesario utilizar ngValue para la forma nativa par mat-select no es necesario solo con value
	// se puede setear un objecto de como viene del backend y si selecciona un item del select
	ngOnInit(): void {
		this.getCategories();
	}

	private buildForm(): void {
		this.form = this.formBuilder.group({
			// id: ['', Validators.required],
			title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
			price: [0, [Validators.required, MyValidators.isPriceValid]],
			image: ['', Validators.required],
			description: ['', [Validators.required, Validators.minLength(10)]],
			category_id: ['', [Validators.required]],
			stock: [4, [Validators.required]]
		});

		this.form.get('stock')?.valueChanges
			.subscribe(value => {
				console.log(value, 'value propio');
			})
	}

	saveProduct(event: Event): void {
		event.preventDefault();
		if (this.form.valid) {
			this.productsService.createProduct(this.form.value)
				.subscribe(() => {
					this.router.navigate(['admin/products'])
				});
		}
		console.log(this.form.value);
	}

	uploadFile({ target }: Event)  {
		// @ts-ignore
		const file = target.files[0];
		const dir = 'images';
		const fileRef = this.storage.ref(dir);
		const task = this.storage.upload(dir, file)
		task.snapshotChanges()
			.pipe(
				finalize(() => {
					this.image$ = fileRef.getDownloadURL();
					this.image$.subscribe((url: string) => {
						// @ts-ignore
						this.form.get('image').setValue(url);
					})
				})
			)
			.subscribe();
		console.log(file);
	}

	get priceField() {
		return this.form.get('price');
	}

	private getCategories() {
		this.categories$ = this.categoriesService.getAllCategories();
	}

	get titleField() {
		return this.form.get('title');
	}

	get imageField() {
		return this.form.get('image');
	}

	get descriptionField() {
		return this.form.get('description');
	}

}
