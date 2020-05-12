import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadesComponent } from './pages/atividades/atividades.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsuariosComponent } from './template-parts/usuarios/usuarios.component';
import { PontosComponent } from './template-parts/pontos/pontos.component';
import { LoginComponent } from './template-parts/login/login.component';
import { ProjetosComponent } from './template-parts/projetos/projetos.component';
import { ClientesComponent } from './template-parts/clientes/clientes.component';


const routes: Routes = [
    { path: '', redirectTo: 'atividades', pathMatch: 'full' },
    { path: 'atividades', component: AtividadesComponent, children: [
        { path: ':id', component: AtividadesComponent },
    ] },
    { path: 'usuarios', component: UsuariosComponent, children: [
        { path: ':id', component: UsuariosComponent },
    ] },
    { path: 'pontos', component: PontosComponent, children: [
        { path: ':id', component: PontosComponent },
    ] },
    { path: 'projetos', component: ProjetosComponent, children: [
        { path: ':id', component: ProjetosComponent },
    ] },
    { path: 'clientes', component: ClientesComponent, children: [
        { path: ':id', component: ClientesComponent },
    ] },
    { path: 'login', component: LoginComponent, children: [
        { path: ':id', component: LoginComponent },
    ] },
    { path: '**', redirectTo: '/404' },
    { path: '404', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
