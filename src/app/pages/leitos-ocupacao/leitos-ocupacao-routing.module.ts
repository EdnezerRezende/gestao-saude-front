import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitosOcupacaoPage } from './leitos-ocupacao.page';

const routes: Routes = [
  {
    path: '',
    component: LeitosOcupacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitosOcupacaoPageRoutingModule {}
