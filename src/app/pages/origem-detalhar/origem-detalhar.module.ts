import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemDetalharPageRoutingModule } from './origem-detalhar-routing.module';

import { OrigemDetalharPage } from './origem-detalhar.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrigemDetalharPageRoutingModule
  ],
  declarations: [OrigemDetalharPage]
})
export class OrigemDetalharPageModule {}
