import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitoDetalharPage } from './leito-detalhar.page';

const routes: Routes = [
  {
    path: '',
    component: LeitoDetalharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitoDetalharPageRoutingModule {}
