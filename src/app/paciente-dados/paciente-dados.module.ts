import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteDadosPageRoutingModule } from './paciente-dados-routing.module';

import { PacienteDadosPage } from './paciente-dados.page';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PacienteDadosPageRoutingModule
  ],
  declarations: [PacienteDadosPage]
})
export class PacienteDadosPageModule {}
