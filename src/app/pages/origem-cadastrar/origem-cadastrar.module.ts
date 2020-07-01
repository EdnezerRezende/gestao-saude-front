import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemCadastrarPageRoutingModule } from './origem-cadastrar-routing.module';

import { OrigemCadastrarPage } from './origem-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrigemCadastrarPageRoutingModule
  ],
  declarations: [OrigemCadastrarPage]
})
export class OrigemCadastrarPageModule {}
