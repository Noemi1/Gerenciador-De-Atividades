import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { FilterUtils } from 'primeng/utils';
import * as $ from 'jquery';

import { AtividadesService } from 'src/app/services/atividades.service';
import { Atividade } from 'src/app/models/atividade';
import { FilterTable } from 'src/app/shared/filterTable';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

    cols: any[];
    atividades: any;
    selectedAtividade: Atividade;
    touchTime = 0;
    paginator: Observable<boolean>;


    @ViewChild('atividade') atividade: ElementRef;

    constructor(
        private serviceAtividade: AtividadesService,
        private router: Router,
        private filterTable: FilterTable
    ) {
        this.cols = [
            { header: 'Id' },
            { header: 'Usuario' },
            { header: 'Projeto' },
            { header: 'Cliente' },
            { header: 'Tipo' },
            { header: 'Módulo' },
            { header: 'Data' },
            { header: 'Horas Gastas' },
        ];
    }

    ngOnInit(): void {
        this.serviceAtividade.getAtividades().forEach(atividades => {
            this.atividades = atividades as Atividade[];
            return this.atividades;
        });
    }
    onSelect(atividade: Atividade) {
        this.selectedAtividade = atividade;
        this.atividade.nativeElement.active();
    }
    
    verDetalhes(atividade){
        if (this.touchTime === 0) {
            this.onSelect(atividade);
            this.touchTime = new Date().getTime();
        } else {
            if (((new Date().getTime()) - this.touchTime) < 500) {
                this.router.navigate(['atividades/ver-detalhes', atividade.id]);
                this.touchTime = 0;
            } else {
                this.onSelect(atividade);
                this.touchTime = new Date().getTime();
            }
        }
    }
    
  filtro(value) {
    this.filterTable.filterTable(value);
  }
  
}
