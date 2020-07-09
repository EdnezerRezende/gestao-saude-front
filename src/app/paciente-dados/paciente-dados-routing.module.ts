import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteDadosPage } from './paciente-dados.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteDadosPageRoutingModule {}
