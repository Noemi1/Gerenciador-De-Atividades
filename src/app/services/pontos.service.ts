import { Injectable } from '@angular/core';

import { Ponto } from '../models/pontos';
import { rootUrl } from './../shared/root-url';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PontosService {

	readonly rootUrl = rootUrl;
	public formPontos: Ponto;
	listPontos: Ponto[];

	constructor(
		private http: HttpClient,
	) { }

	refreshList() {
		this.http.get(this.rootUrl + '/Ponto').toPromise()
			.then(res => this.listPontos = res as Ponto[]);
	}
	getPontos() {
		return this.http.get(`${this.rootUrl}/Ponto`);
	}
	getPonto(id) {
		return this.http.get(`${this.rootUrl}/Ponto/${id}`);
	}

}
