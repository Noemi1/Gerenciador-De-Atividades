
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Projetos } from './../models/projetos';
import { rootUrl } from './../shared/root-url';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

    readonly rootUrl = rootUrl;

    public formProjetos: Projetos;
    listProjetos: Projetos[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootUrl + '/projetos').toPromise()
            .then(res => this.listProjetos = res as Projetos[]);
    }
    getProjetos() {
        return this.http.get(`${this.rootUrl}/projetos`);
    }
    getProjeto(id) {
        return this.http.get(`${this.rootUrl}/projetos/${id}`);
    }

}
