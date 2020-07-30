import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'paciente-dados/pacienteId/:id/ehConsulta/:ehConsulta',
    loadChildren: () => import('./paciente-dados/paciente-dados.module').then( m => m.PacienteDadosPageModule)
  },
  {
    path: 'paciente-dados/pacienteId/:id/alta/:valor',
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
    path: 'leito-cadastrar/leitoId/:id',
    loadChildren: () => import('./pages/leito-cadastrar/leito-cadastrar.module').then( m => m.LeitoCadastrarPageModule)
  },
  {
    path: 'leito-detalhar/leitoId/:id',
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
    path: 'origem-cadastrar/localOrigem/:id',
    loadChildren: () => import('./pages/origem-cadastrar/origem-cadastrar.module').then( m => m.OrigemCadastrarPageModule)
  },
  {
    path: 'origem-listar',
    loadChildren: () => import('./pages/origem-listar/origem-listar.module').then( m => m.OrigemListarPageModule)
  },
  {
    path: 'pacientes-com-leito',
    loadChildren: () => import('./pages/pacientes-com-leito/pacientes-com-leito.module').then( m => m.PacientesComLeitoPageModule)
  },
  {
    path: 'pacientes-liberados',
    loadChildren: () => import('./pages/pacientes-liberados/pacientes-liberados.module').then( m => m.PacientesLiberadosPageModule)
  },
  {
    path: 'leitos-ocupacao',
    loadChildren: () => import('./pages/leitos-ocupacao/leitos-ocupacao.module').then( m => m.LeitosOcupacaoPageModule)
  },
  {
    path: 'leitos-quantidades',
    loadChildren: () => import('./pages/leitos-quantidades/leitos-quantidades.module').then( m => m.LeitosQuantidadesPageModule)
  },
  {
    path: 'doenca-listar',
    loadChildren: () => import('./pages/doenca-listar/doenca-listar.module').then( m => m.DoencaListarPageModule)
  },
  {
    path: 'doenca-detalhar',
    loadChildren: () => import('./pages/doenca-detalhar/doenca-detalhar.module').then( m => m.DoencaDetalharPageModule)
  },
  {
    path: 'doenca-cadastrar',
    loadChildren: () => import('./pages/doenca-cadastrar/doenca-cadastrar.module').then( m => m.DoencaCadastrarPageModule)
  },
  {
    path: 'doenca-detalhar/doencaId/:id',
    loadChildren: () => import('./pages/doenca-detalhar/doenca-detalhar.module').then( m => m.DoencaDetalharPageModule)
  },
  {
    path: 'doenca-cadastrar/doencaId/:id',
    loadChildren: () => import('./pages/doenca-cadastrar/doenca-cadastrar.module').then( m => m.DoencaCadastrarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
