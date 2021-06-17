import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map, debounceTime } from 'rxjs/operators';

const API = 'ojz2OmUWtKTHJYfzm2NGKXgQZl4M6PXE'
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

	searchField = new FormControl();
	results: any[] = [];

	constructor(
		private http: HttpClient
	) { }

	ngOnInit(): void {
		this.searchField.valueChanges
			.pipe(
				debounceTime(500)
			)
			.subscribe(value => {
				if (value) {
					this.getData(value);
				}
			});
		this.searchField.setValidators(null)
	}

	private getData(query: string) {
		this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API}&limit=12`)
			.pipe(
				map((response: any) => {
					return response.data.map((item: any) => item.images.downsized);
				})
			)
			.subscribe(data => {
				this.results = data;
				console.log(data);
			})
	}

}
