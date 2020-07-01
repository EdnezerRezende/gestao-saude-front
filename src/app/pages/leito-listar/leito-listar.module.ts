import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeitoListarPageRoutingModule } from './leito-listar-routing.module';

import { LeitoListarPage } from './leito-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeitoListarPageRoutingModule
  ],
  declarations: [LeitoListarPage]
})
export class LeitoListarPageModule {}
