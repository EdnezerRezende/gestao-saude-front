import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigemListarPage } from './origem-listar.page';

const routes: Routes = [
  {
    path: '',
    component: OrigemListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigemListarPageRoutingModule {}
