import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoencaListarPage } from './doenca-listar.page';

const routes: Routes = [
  {
    path: '',
    component: DoencaListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoencaListarPageRoutingModule {}
