import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemDetalharPageRoutingModule } from './origem-detalhar-routing.module';

import { OrigemDetalharPage } from './origem-detalhar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrigemDetalharPageRoutingModule
  ],
  declarations: [OrigemDetalharPage]
})
export class OrigemDetalharPageModule {}
