import { Component, OnInit } from '@angular/core';
import { Ponto } from 'src/app/models/pontos';
import { Router } from '@angular/router';
import { FilterTable } from 'src/app/shared/filterTable';
import { PontosService } from 'src/app/services/pontos.service';

@Component({
    selector: 'app-pontos',
    templateUrl: './pontos.component.html',
    styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {

    pontos: Ponto[];
    pontoSelected: Ponto;

    touchTime = 0;
    cols = [
        { header: 'Id' },
        { header: 'Usuário' },
        { header: 'Horário' },
        { header: 'Marcação' }
    ];
    constructor(
        private router: Router,
        private filterTable: FilterTable,
        private pontoService: PontosService
    ) { }

    ngOnInit(): void {
        this.getPontos();        
    }
    getPontos() {
        this.pontoService.getPontos().forEach(pontos => {
            return this.pontos = pontos as Ponto[];
        })
    }
    filtro(value) {
        this.filterTable.filterTable(value);
    }
    
    onSelect(ponto: Ponto) {
        this.pontoSelected = ponto;
    }
    verDetalhes(ponto) {
        if (this.touchTime === 0) {
            this.onSelect(ponto);
            this.touchTime = new Date().getTime();
        } else {
            if (((new Date().getTime()) - this.touchTime) < 500) {
                this.router.navigate(['ponto/ver-detalhes', ponto.id]);
                this.touchTime = 0;
            } else {
                this.onSelect(ponto);
                this.touchTime = new Date().getTime();
            }
        }
    }

}
