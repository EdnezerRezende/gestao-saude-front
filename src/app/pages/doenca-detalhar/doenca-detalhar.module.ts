import { NgModule } from '@angular/core';
import { DoencaDetalharPageRoutingModule } from './doenca-detalhar-routing.module';

import { DoencaDetalharPage } from './doenca-detalhar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DoencaDetalharPageRoutingModule
  ],
  declarations: [DoencaDetalharPage]
})
export class DoencaDetalharPageModule {}
