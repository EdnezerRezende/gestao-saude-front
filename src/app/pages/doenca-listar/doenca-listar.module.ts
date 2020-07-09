import { NgModule } from '@angular/core';
import { DoencaListarPageRoutingModule } from './doenca-listar-routing.module';

import { DoencaListarPage } from './doenca-listar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DoencaListarPageRoutingModule
  ],
  declarations: [DoencaListarPage]
})
export class DoencaListarPageModule {}
