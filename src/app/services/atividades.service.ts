import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Atividade } from './../models/atividade';
import { rootUrl } from './../shared/root-url';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

    readonly rootUrl = rootUrl;

    public formAtividade: Atividade;
    listAtividades: Atividade[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootUrl + '/Atividades').toPromise()
            .then(res => this.listAtividades = res as Atividade[]);
    }
    postAtividades() {
        const atividade = this.http.post(this.rootUrl + '/Atividades', this.formAtividade);
        return atividade;
    }
    putAtividades(atividade) {
        return this.http.put(this.rootUrl + '/Atividades/' + this.formAtividade.Id, atividade);
    }
    deleteAtividades(id) {
        return this.http.delete(this.rootUrl + '/Atividades/' + id);
    }
    getAtividades() {
        return this.http.get(this.rootUrl + '/Atividades');
    }
    getAtividade(id) {
        return this.http.get(`${this.rootUrl}/Atividades/${id}`);
    }

}
