import { NgModule } from '@angular/core';
import { LeitoListarPageRoutingModule } from './leito-listar-routing.module';

import { LeitoListarPage } from './leito-listar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LeitoListarPageRoutingModule
  ],
  declarations: [LeitoListarPage]
})
export class LeitoListarPageModule {}
