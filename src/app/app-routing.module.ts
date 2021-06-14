import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./layout/layout.component";

import { PreloadService } from "@core/services/preload/preload.service";

import {AdminGuard} from "./admin.guard";

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'home'
			},
			{
				path: 'home',
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
				data: { preload: true }
			},
			{
				path: 'products',
				loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
				data: { preload: true }
			},
			{
				path: 'order',
				loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
			},
			{
				path: 'contact',
				loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminGuard],
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '**',
		loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		// preloadingStrategy: PreloadAllModules // carga todos los componentes cuando ya esta disponible para descargar
		preloadingStrategy: PreloadService, // es una estrategia,
		initialNavigation: 'enabled'
})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
