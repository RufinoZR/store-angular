import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from "@shared/shared.module";
import { MaterialModule } from "@meterial/material.module";

import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryComponent } from './containers/category/category.component';


@NgModule({
	declarations: [
		CategoriesComponent,
		CategoryFormComponent,
		CategoryComponent
	],
	imports: [
		CommonModule,
		CategoriesRoutingModule,
		SharedModule,
		MaterialModule,
		ReactiveFormsModule
	]
})
export class CategoriesModule { }
