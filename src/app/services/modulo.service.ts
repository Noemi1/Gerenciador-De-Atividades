import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Modulo } from './../models/modulo';
import { rootUrl } from './../shared/root-url';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

    readonly rootUrl = rootUrl;

    public formModulo: Modulo;
    listModulo: Modulo[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootUrl + '/Projeto_Modulos').toPromise()
            .then(res => this.listModulo = res as Modulo[]);
    }
    getModulos() {
        return this.http.get(`${this.rootUrl}/Projeto_Modulos`);
    }
    getModulo(id) {
        return this.http.get(`${this.rootUrl}/Projeto_Modulos/${id}`);
    }
}
