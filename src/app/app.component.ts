import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showLevel1 = null;
  paginas: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController,
    public menuCtrl: MenuController
  ) {
    this.tratarMenuTela();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  tratarMenuTela() {
    this.paginas = [
      {
        titulo: 'Leito',
        subTitulo: [
          {
            submenu: 'Cadastrar',
            componente: '/leito-cadastrar',
            iconeSub: 'newspaper-outline',
          },
          {
            submenu: 'Listar',
            componente: '/leito-listar',
            iconeSub: 'list-circle-outline',
          },
        ],
        icone: 'bed-outline',
      },
      {
        titulo: 'Origem',
        subTitulo: [
          {
            submenu: 'Cadastrar',
            componente: '/origem-cadastrar',
            iconeSub: 'newspaper-outline',
          },
          {
            submenu: 'Listar',
            componente: '/origem-listar',
            iconeSub: 'list-circle-outline',
          },
        ],
        icone: 'wap-horizontal-outline',
      },
      {
        titulo: 'Paciente',
        subTitulo: [
          {
            submenu: 'Pacientes Com Leito ',
            componente: '/pacientes-com-leito',
            iconeSub: 'list-circle-outline',
          },
          {
            submenu: 'Pacientes liberados ',
            componente: '/pacientes-liberados',
            iconeSub: 'list-circle-outline',
          },
        ],
        icone: 'wap-horizontal-outline',
      },
      {
        titulo: 'Relatórios',
        subTitulo: [
          {
            submenu: 'Pacientes Com Leito',
            componente: '/paciente-listar',
            iconeSub: 'list-circle-outline',
          },
          {
            submenu: 'Leitos x Ocupação',
            componente: '/leitos-ocupacao',
            iconeSub: 'list-circle-outline',
          },
        ],
        icone: 'wap-horizontal-outline',
      },
    ];
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  }

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  }

  irPagina(componente) {
    this.menuCtrl.close();
    this.toggleLevel1(null);
    this.nav.navigateRoot('');
    this.nav.navigateForward(componente);
  }

}
