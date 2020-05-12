import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FilterTable } from '../../shared/filterTable';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    usuarios: Usuario[];
    userSelected: Usuario;
    @ViewChild('usuario') usuario: ElementRef;

    touchTime = 0;
    cols = [
        { header: 'Id' },
        { header: 'Nome' }
    ];

    constructor(
        private usuariosService: UsuarioService,
        private router: Router,
        private filterTable: FilterTable
    ) { }

    ngOnInit(): void {
        this.getUsuarios();
    }

    getUsuarios() {
        this.usuariosService.getUsuarios().forEach(usuario => {
            return this.usuarios = usuario as Usuario[];
        })
    }
    onSelect(usuario: Usuario) {
        this.userSelected = usuario;
    }

    filtro(value) {
        this.filterTable.filterTable(value);
    }

    verDetalhes(usuario) {
        if (this.touchTime === 0) {
            this.onSelect(usuario);
            this.touchTime = new Date().getTime();
        } else {
            if (((new Date().getTime()) - this.touchTime) < 500) {
                this.router.navigate(['usuarios/ver-detalhes', usuario.id]);
                this.touchTime = 0;
            } else {
                this.onSelect(usuario);
                this.touchTime = new Date().getTime();
            }
        }
    }

}
