import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitoListarPage } from './leito-listar.page';

const routes: Routes = [
  {
    path: '',
    component: LeitoListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitoListarPageRoutingModule {}
