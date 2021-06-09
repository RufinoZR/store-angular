import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";

import { MyValidators } from "@utils/validators";

import { ProductsService } from "@core/services/products/products.service";


@Component({
	selector: 'app-form-product',
	templateUrl: './form-product.component.html',
	styleUrls: ['./form-product.component.sass']
})
export class FormProductComponent {
	form: FormGroup | any;
	image$: Observable<any> | any;

	constructor(
		private formBuilder: FormBuilder,
		private productsService: ProductsService,
		private router: Router,
		private storage: AngularFireStorage
	) {
		this.buildForm();
	}

	private buildForm(): void {
		this.form = this.formBuilder.group({
			id: ['', Validators.required],
			title: ['', Validators.required],
			price: [0, [Validators.required, MyValidators.isPriceValid]],
			image: [''],
			description: ['', Validators.required]
		});
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
}
