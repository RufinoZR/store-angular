import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

	emailField: FormControl;

	constructor() {
		this.emailField = new FormControl('', [
			Validators.required,
			Validators.email
		]);
		// this.emailField.valueChanges
		//   .subscribe(value => {
		//     console.log(value);
		//   });
	}

	sendMail(): void {
		if (this.emailField.valid) {
		} else {
		}
	}
}
