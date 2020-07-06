import { NgModule } from '@angular/core';

import { OrigemCadastrarPageRoutingModule } from './origem-cadastrar-routing.module';

import { OrigemCadastrarPage } from './origem-cadastrar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrigemCadastrarPageRoutingModule
  ],
  declarations: [OrigemCadastrarPage]
})
export class OrigemCadastrarPageModule {}
