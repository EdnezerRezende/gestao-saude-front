import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { GestaoTitleHeaderComponent } from './components/customizacoes/customizacoes/gestao-title-header/gestao-title-header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule,  AppRoutingModule ],
  bootstrap: [AppComponent]
})
export class AppModule {}
