import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemListarPageRoutingModule } from './origem-listar-routing.module';

import { OrigemListarPage } from './origem-listar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrigemListarPageRoutingModule
  ],
  declarations: [OrigemListarPage]
})
export class OrigemListarPageModule {}
