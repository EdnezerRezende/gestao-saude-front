import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import {EditorModule} from 'primeng/editor';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';

import { CustomizacoesModule } from 'src/app/components/customizacoes/customizacoes/customizacoes.module';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    DropdownModule,
    FieldsetModule,
    ButtonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
