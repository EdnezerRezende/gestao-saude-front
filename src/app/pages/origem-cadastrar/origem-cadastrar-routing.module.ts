import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigemCadastrarPage } from './origem-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: OrigemCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigemCadastrarPageRoutingModule {}
