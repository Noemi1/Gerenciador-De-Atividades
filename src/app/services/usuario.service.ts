import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from './../models/usuario';
import { Observable } from 'rxjs';
import { rootUrl } from './../shared/root-url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    readonly rootUrl = rootUrl;

    public formUsuario: Usuario;
    listUsuario: Usuario[];
    pessoa: Usuario;

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(`${this.rootUrl}/usuarios`).toPromise()
            .then(res => this.listUsuario = res as Usuario[]);
    }
    getUsuarios() {
        return this.http.get(`${this.rootUrl}/usuarios`);
    }
    getUsuario(id): Observable<object> {
        return this.http.get(`${this.rootUrl}/usuarios/${id}`);
    }
}
