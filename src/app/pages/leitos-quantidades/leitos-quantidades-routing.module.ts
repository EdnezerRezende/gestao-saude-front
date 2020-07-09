import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitosQuantidadesPage } from './leitos-quantidades.page';

const routes: Routes = [
  {
    path: '',
    component: LeitosQuantidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitosQuantidadesPageRoutingModule {}
