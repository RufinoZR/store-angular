import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { EmployeeModel } from "@core/models/employee/employee.model";



@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
	@Input() title: string;
	@Input() data: EmployeeModel[] = [];

	@Output() add = new EventEmitter<string>();

	label: string;

	constructor() { }

	ngOnInit(): void {
	}

	addItem() {
		this.add.emit(this.label);
		this.label = '';
	}
}
