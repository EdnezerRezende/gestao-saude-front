import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigemDetalharPage } from './origem-detalhar.page';

const routes: Routes = [
  {
    path: '',
    component: OrigemDetalharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigemDetalharPageRoutingModule {}
