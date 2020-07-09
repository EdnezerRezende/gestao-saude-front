import { NgModule } from '@angular/core';

import { LeitosQuantidadesPageRoutingModule } from './leitos-quantidades-routing.module';

import { LeitosQuantidadesPage } from './leitos-quantidades.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LeitosQuantidadesPageRoutingModule
  ],
  declarations: [LeitosQuantidadesPage]
})
export class LeitosQuantidadesPageModule {}
