import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tipo } from './../models/tipo';
import { rootUrl } from './../shared/root-url';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

    readonly rootUrl = rootUrl;

    public formTipos: Tipo;
    listTipos: Tipo[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootUrl + '/atividade_tipo').toPromise()
            .then(res => this.listTipos = res as Tipo[]);
    }
    getTipos() {
        return this.http.get(`${this.rootUrl}/atividade_tipo`);
    }
    getTipo(id) {
        return this.http.get(`${this.rootUrl}/atividade_tipo/${id}`);
    }

}
