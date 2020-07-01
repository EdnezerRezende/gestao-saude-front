import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeitoDetalharPageRoutingModule } from './leito-detalhar-routing.module';

import { LeitoDetalharPage } from './leito-detalhar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeitoDetalharPageRoutingModule
  ],
  declarations: [LeitoDetalharPage]
})
export class LeitoDetalharPageModule {}
