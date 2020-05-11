import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Clientes } from './../models/clientes';
import { rootUrl } from './../shared/root-url';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

    readonly rootUrl = rootUrl;
    
    public formClientes: Clientes;
    listClientes: Clientes[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootUrl + '/clientes').toPromise()
            .then(res => this.listClientes = res as Clientes[]);
    }
    getClientes() {
        return this.http.get(`${this.rootUrl}/clientes`);
    }
    getCliente(id) {
        return this.http.get(`${this.rootUrl}/clientes/${id}`);
    }

}
