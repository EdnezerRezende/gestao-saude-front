import { NgModule } from '@angular/core';

import { PacienteAltaPageRoutingModule } from './paciente-alta-routing.module';

import { PacienteAltaPage } from './paciente-alta.page';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    PacienteAltaPageRoutingModule
  ],
  declarations: [PacienteAltaPage]
})
export class PacienteAltaPageModule {}
