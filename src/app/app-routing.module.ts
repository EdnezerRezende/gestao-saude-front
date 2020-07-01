import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'paciente-dados/pacienteId/:id',
    loadChildren: () => import('./paciente-dados/paciente-dados.module').then( m => m.PacienteDadosPageModule)
  },
  {
    path: 'paciente-alta/pacienteId/:id',
    loadChildren: () => import('./paciente-alta/paciente-alta.module').then( m => m.PacienteAltaPageModule)
  },
  {
    path: 'leito-listar',
    loadChildren: () => import('./pages/leito-listar/leito-listar.module').then( m => m.LeitoListarPageModule)
  },
  {
    path: 'leito-cadastrar',
    loadChildren: () => import('./pages/leito-cadastrar/leito-cadastrar.module').then( m => m.LeitoCadastrarPageModule)
  },
  {
    path: 'leito-detalhar',
    loadChildren: () => import('./pages/leito-detalhar/leito-detalhar.module').then( m => m.LeitoDetalharPageModule)
  },
  {
    path: 'origem-detalhar',
    loadChildren: () => import('./pages/origem-detalhar/origem-detalhar.module').then( m => m.OrigemDetalharPageModule)
  },
  {
    path: 'origem-cadastrar',
    loadChildren: () => import('./pages/origem-cadastrar/origem-cadastrar.module').then( m => m.OrigemCadastrarPageModule)
  },
  {
    path: 'origem-listar',
    loadChildren: () => import('./pages/origem-listar/origem-listar.module').then( m => m.OrigemListarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
