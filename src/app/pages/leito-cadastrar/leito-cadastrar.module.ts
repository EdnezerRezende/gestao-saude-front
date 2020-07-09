import { NgModule } from '@angular/core';

import { LeitoCadastrarPageRoutingModule } from './leito-cadastrar-routing.module';

import { LeitoCadastrarPage } from './leito-cadastrar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LeitoCadastrarPageRoutingModule
  ],
  declarations: [LeitoCadastrarPage]
})
export class LeitoCadastrarPageModule {}
