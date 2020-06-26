import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { GestaoTitleHeaderComponent } from 'src/app/components/customizacoes/customizacoes/gestao-title-header/gestao-title-header.component';

@NgModule({
  exports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    GestaoTitleHeaderComponent

  ], 
  declarations: [
    GestaoTitleHeaderComponent
  ]
})
export class SharedModule { }
