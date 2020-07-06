import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesLiberadosPage } from './pacientes-liberados.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesLiberadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesLiberadosPageRoutingModule {}
