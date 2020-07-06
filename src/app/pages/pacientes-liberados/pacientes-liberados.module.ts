import { NgModule } from '@angular/core';

import { PacientesLiberadosPageRoutingModule } from './pacientes-liberados-routing.module';

import { PacientesLiberadosPage } from './pacientes-liberados.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PacientesLiberadosPageRoutingModule
  ],
  declarations: [PacientesLiberadosPage]
})
export class PacientesLiberadosPageModule {}
