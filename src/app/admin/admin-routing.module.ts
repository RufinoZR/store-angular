import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from "./components/product-form/product-form.component";
import { NavComponent } from "./components/nav/nav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TableComponent } from "./components/table/table.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { FormProductComponent } from "./components/form-product/form-product.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import {BasicFormComponent} from "@admin/components/basic-form/basic-form.component";

const routes: Routes = [
	{
		path: '',
		component: NavComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'products',
				component: ProductsListComponent
			},
			{
				path: 'create',
				component: ProductFormComponent
			},
			{
				path: 'products/create',
				component: FormProductComponent
			},
			{
				path: 'products/edit/:id',
				component: ProductEditComponent
			},
			{
				path: 'basic',
				component: BasicFormComponent
			},
			{
				path: 'category',
				loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
