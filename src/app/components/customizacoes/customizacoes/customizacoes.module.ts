import { NgModule } from '@angular/core';
import { GestaoTitleHeaderComponent } from './gestao-title-header/gestao-title-header.component';
import { AppSearchbarComponent } from './app-searchbar/app-searchbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PacientesListagemComponent } from './pacientes-listagem/pacientes-listagem.component';
import { LeitosCirculoComponent } from './leitos-circulo/leitos-circulo.component';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    GestaoTitleHeaderComponent,
    AppSearchbarComponent,
    PacientesListagemComponent,
    LeitosCirculoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ButtonModule,
    FontAwesomeModule
  ],
  exports: [
    GestaoTitleHeaderComponent,
    AppSearchbarComponent,
    PacientesListagemComponent,
    LeitosCirculoComponent
  ]
})
export class CustomizacoesModule { }
