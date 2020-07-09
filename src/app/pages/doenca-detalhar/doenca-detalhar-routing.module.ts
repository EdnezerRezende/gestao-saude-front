import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoencaDetalharPage } from './doenca-detalhar.page';

const routes: Routes = [
  {
    path: '',
    component: DoencaDetalharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoencaDetalharPageRoutingModule {}
