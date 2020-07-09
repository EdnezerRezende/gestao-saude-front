import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoencaCadastrarPage } from './doenca-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: DoencaCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoencaCadastrarPageRoutingModule {}
