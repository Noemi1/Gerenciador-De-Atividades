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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ListagemComponent,
    AtividadesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // PrimeNg
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
