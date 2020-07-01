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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  tratarMenuTela(): any[] {
    return [
      {
        titulo: 'Leitos',
        subTitulo: [
          {
            submenu: 'Cadastrar',
            componente: 'LeitoCadastrarPage',
            iconeSub: 'md-paper',
          },
          {
            submenu: 'Listar',
            componente: 'LeitoListarPage',
            iconeSub: 'md-list-box',
          },
        ],
        icone: 'md-filing',
      },
      {
        titulo: 'Origens',
        subTitulo: [
          {
            submenu: 'Cadastrar',
            componente: 'OrigemCadastrarPage',
            iconeSub: 'md-paper',
          },
          {
            submenu: 'Listar',
            componente: 'OrigemListarPage',
            iconeSub: 'md-list-box',
          },
        ],
        icone: 'md-filing',
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
    this.toggleLevel1(undefined);
    this.nav.navigateRoot('');
    this.nav.navigateForward(componente);

  }

}
