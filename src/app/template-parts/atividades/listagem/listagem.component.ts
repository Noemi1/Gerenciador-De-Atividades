import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AtividadesService } from 'src/app/services/atividades.service';
import { Atividade } from 'src/app/models/atividade';
import { Router } from '@angular/router';

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


    @ViewChild('atividade') atividade: ElementRef;

    constructor(
        private serviceAtividade: AtividadesService,
        private router: Router,
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
            console.log(this.atividades)
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

}
