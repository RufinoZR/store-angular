import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from "@meterial/material.module";


import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { SharedModule } from "@shared/shared.module";


@NgModule({
	declarations: [
		ProductFormComponent,
		NavComponent,
		ProductsListComponent,
		DashboardComponent,
		TableComponent,
		FormProductComponent,
		ProductEditComponent,
		BasicFormComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
		SharedModule,
	]
})
export class AdminModule { }
