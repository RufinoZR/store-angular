import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";

import { GeneratorService } from "@core/services/generator/generator.service";
import { EmployeeModel } from "@core/models/employee/employee.model";

const names = ['rufino', 'mayra', 'may', 'ruf'];

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit, OnDestroy {
	salesList: EmployeeModel[] = [];
	bList: EmployeeModel[] = [];

	value: number;
	value$: Observable<number>
	sub$: Subscription;

	constructor(
		private generatorService: GeneratorService
	) {
		this.value$ = this.generatorService.getData()
			.pipe(
				tap(num => console.log(num))
			);
	}

	ngOnInit(): void {
		this.salesList = this.generatorService.generate(names, [10, 20], 10);
		this.bList = this.generatorService.generate(names, [10, 15], 10);
		this.sub$ = this.generatorService.getData()
			.subscribe(value => {
				this.value = value;
				console.log(this.value);
			});
	}

	ngOnDestroy() {
		this.sub$.unsubscribe();
	}

	addItem(list: EmployeeModel[], label: string) {
		list.unshift({
			label,
			num: this.generatorService.generateNumber([10, 20])
		});
	}

}
