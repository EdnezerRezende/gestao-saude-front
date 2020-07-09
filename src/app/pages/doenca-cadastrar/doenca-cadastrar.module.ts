import { NgModule } from '@angular/core';
import { DoencaCadastrarPageRoutingModule } from './doenca-cadastrar-routing.module';

import { DoencaCadastrarPage } from './doenca-cadastrar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DoencaCadastrarPageRoutingModule
  ],
  declarations: [DoencaCadastrarPage]
})
export class DoencaCadastrarPageModule {}
