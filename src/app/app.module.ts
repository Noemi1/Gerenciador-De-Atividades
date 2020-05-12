import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template-parts/header/header.component';
import { FooterComponent } from './template-parts/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListagemComponent } from './template-parts/atividades/listagem/listagem.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';

// PrimeNG
import { TableModule } from 'primeng/table';
import { UsuariosComponent } from './template-parts/usuarios/usuarios.component';
import { FilterTable } from './shared/filterTable';
import { PontosComponent } from './template-parts/pontos/pontos.component';
import { LoginComponent } from './template-parts/login/login.component';
import { ProjetosComponent } from './template-parts/projetos/projetos.component';
import { ClientesComponent } from './template-parts/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ListagemComponent,
    AtividadesComponent,
    UsuariosComponent,
    PontosComponent,
    LoginComponent,
    ProjetosComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // PrimeNg
    TableModule,
  ],
  providers: [FilterTable],
  bootstrap: [AppComponent]
})
export class AppModule { }
