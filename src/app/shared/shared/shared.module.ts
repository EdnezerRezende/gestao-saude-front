import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { GestaoTitleHeaderComponent } from 'src/app/components/customizacoes/customizacoes/gestao-title-header/gestao-title-header.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import {EditorModule} from 'primeng/editor';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { CustomizacoesModule } from 'src/app/components/customizacoes/customizacoes/customizacoes.module';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CustomizacoesModule,
    AutoCompleteModule,
    EditorModule,
    ChartModule,
    TableModule,
    DropdownModule
  ]
})
export class SharedModule { }
