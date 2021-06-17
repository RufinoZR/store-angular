import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MyValidators } from "@utils/validators";

import { CategoriesService } from "@core/services/categories/categories.service";
import { CategoryModel } from "@core/models/category/category.model";

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent implements OnInit {
	isNew = true;

	@Input()
	set category(data: CategoryModel) {
		if (data) {
			this.isNew = false;
			this.form.patchValue(data);
		}
	}
	@Output() create = new EventEmitter();
	@Output() update = new EventEmitter();

	form: FormGroup;
	// categoryId: string;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private storage: AngularFireStorage,
		private categoriesService: CategoriesService
	) {
		this.buildForm();
	}

	ngOnInit(): void { }

	private buildForm() {
		this.form = this.formBuilder.group({
			name: ['', [Validators.required], [MyValidators.validateCategory(this.categoriesService)]],
			image: ['', Validators.required]
		});
	}

	save() {
		if (this.form.valid) {
			if (this.isNew) {
				// this.createCategory();
				this.create.emit(this.form.value);
			} else {
				this.update.emit(this.form.value);
			}
		} else {
			this.form.markAllAsTouched();
		}
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
					fileRef
						.getDownloadURL()
						.subscribe((url: string) => {
							// @ts-ignore
							this.form.get('image').setValue(url);
						})
				})
			)
			.subscribe();
		console.log(file);
	}

	get nameField() {
		return this.form.get('name');
	}

	get imageField() {
		return this.form.get('image');
	}

}
