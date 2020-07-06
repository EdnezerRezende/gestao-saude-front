import { NgModule } from '@angular/core';

import { PacientesComLeitoPageRoutingModule } from './pacientes-com-leito-routing.module';
import { PacientesComLeitoPage } from './pacientes-com-leito.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PacientesComLeitoPageRoutingModule
  ],
  declarations: [PacientesComLeitoPage]
})
export class PacientesComLeitoPageModule {}
