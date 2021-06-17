import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
	selector: 'app-basic-form',
	templateUrl: './basic-form.component.html',
	styleUrls: ['./basic-form.component.sass']
})
export class BasicFormComponent implements OnInit {
	form: FormGroup;

/*	form = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl(''),
		phone: new FormControl(''),
		color: new FormControl(''),
		date: new FormControl(''),
		age: new FormControl(12),
		category: new FormControl('cat2'),
		tag: new FormControl(''),
		agree: new FormControl(false),
		gender: new FormControl(''),
	});*/


	// nameField = new FormControl('', [Validators.required]);
	// emailField = new FormControl('');
	// phoneField = new FormControl();
	// colorField = new FormControl();
	// dateField = new FormControl();
	// ageField = new FormControl(12);
	// categoryField = new FormControl('cat2');
	// tagField = new FormControl('');
	// agreeField = new FormControl(false);
	// genderField = new FormControl('');

	constructor(
		private formBuilder: FormBuilder
	) {
		this.buildForm();
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
			fullName: this.formBuilder.group({ // form group dentro de otro formgroup
				name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
				last: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
			}),
			email: ['', [Validators.required, Validators.email]],
			phone: [''],
			color: [''],
			date: [''],
			age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
			category: ['cat2'],
			tag: [''],
			agree: [false, [Validators.requiredTrue]],
			gender: [''],
		});
	}

	ngOnInit(): void {
		// this.nameField.valueChanges
		// 	.subscribe(value => {
		// 		console.log(value);
		// 	});
	}

	getNameValue() {
		// console.log(this.nameField.value);
	}

	save() {
		console.log(this.form.value);
		if (this.form.valid) {
			console.log(this.form.value, this.form.valid);
		} else {
			this.form.markAllAsTouched();
		}
	}

	get nameField() {
		// get con fullname group en sub group
		// return this.form.get('fullName')?.get('name');
		return this.form.get('fullName.name'); // forma corta de obtener el sub field
		// return this.form.get('name')
	}

	get emailField() {
		return this.form.get('email')
	}

	get phoneField() {
		return this.form.get('phone')
	}

	get colorField() {
		return this.form.get('color')
	}

	get dateField() {
		return this.form.get('date')
	}

	get ageField() {
		return this.form.get('age')
	}

	get categoryField() {
		return this.form.get('category')
	}

	get tagField() {
		return this.form.get('tag')
	}

	get agreeField() {
		return this.form.get('agree')
	}

	get genderField() {
		return this.form.get('gender')
	}
}
