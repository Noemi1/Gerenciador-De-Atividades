import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadesComponent } from './pages/atividades/atividades.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
    { path: '', redirectTo: 'atividades', pathMatch: 'full' },
    { path: 'atividades', component: AtividadesComponent, children: [
        { path: ':id', component: AtividadesComponent },
    ] },
    { path: '**', redirectTo: '/404' },
    { path: '404', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
