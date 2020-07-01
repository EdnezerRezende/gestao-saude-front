import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeitoCadastrarPageRoutingModule } from './leito-cadastrar-routing.module';

import { LeitoCadastrarPage } from './leito-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeitoCadastrarPageRoutingModule
  ],
  declarations: [LeitoCadastrarPage]
})
export class LeitoCadastrarPageModule {}
