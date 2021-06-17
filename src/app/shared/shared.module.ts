import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { MaterialModule } from "@meterial/material.module";
import { FibonacciPipe } from './pipes/fibonacci/fibonacci.pipe';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		FibonacciPipe,
		StepperComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		FibonacciPipe,
		StepperComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule,
		ReactiveFormsModule
	]
})
export class SharedModule { }
