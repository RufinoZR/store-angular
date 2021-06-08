import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// si se importa en shared se creara varias instancias del servicio
import { ProductsService } from "./services/products/products.service";

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	providers: [
		ProductsService
	]
})
export class CoreModule { }
