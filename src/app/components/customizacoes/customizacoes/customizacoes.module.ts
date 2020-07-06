import { NgModule } from '@angular/core';
import { GestaoTitleHeaderComponent } from './gestao-title-header/gestao-title-header.component';
import { AppSearchbarComponent } from './app-searchbar/app-searchbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PacientesListagemComponent } from './pacientes-listagem/pacientes-listagem.component';

@NgModule({
  declarations: [
    GestaoTitleHeaderComponent,
    AppSearchbarComponent,
    PacientesListagemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    GestaoTitleHeaderComponent,
    AppSearchbarComponent,
    PacientesListagemComponent
  ]
})
export class CustomizacoesModule { }
