import { NgModule } from '@angular/core';

import { LeitosOcupacaoPageRoutingModule } from './leitos-ocupacao-routing.module';

import { LeitosOcupacaoPage } from './leitos-ocupacao.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LeitosOcupacaoPageRoutingModule
  ],
  declarations: [LeitosOcupacaoPage]
})
export class LeitosOcupacaoPageModule {}
