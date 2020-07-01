import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoTitleHeaderComponent } from './gestao-title-header/gestao-title-header.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [GestaoTitleHeaderComponent],
  imports: [
    SharedModule
  ]
})
export class CustomizacoesModule { }
