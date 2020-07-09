import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitoCadastrarPage } from './leito-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: LeitoCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitoCadastrarPageRoutingModule {}
