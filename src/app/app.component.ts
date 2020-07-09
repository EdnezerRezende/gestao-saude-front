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

  showBtn = false;
  deferredPrompt: any;

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

    this.checarPWA();
  }

  checarPWA() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;

      // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });

    window.addEventListener('appinstalled', (event) => {
      console.log('installed');
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
    }
  }

  instalarPWA(e) {
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      this.deferredPrompt = null;
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
            iconeSub: 'pencil-outline',
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
            iconeSub: 'pencil-outline',
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
            submenu: 'Leito Quantitativos',
            componente: '/leitos-quantidades',
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
      {
        titulo: 'Doença',
        subTitulo: [
          {
            submenu: 'Cadastrar',
            componente: '/doenca-cadastrar',
            iconeSub: 'pencil-outline',
          },
          {
            submenu: 'Listar',
            componente: '/doenca-listar',
            iconeSub: 'list-circle-outline',
          },
        ],
        icone: 'thermometer-outline',
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
    this.showLevel1 = null;
    this.toggleLevel1(null);
    this.nav.navigateRoot('');
    this.nav.navigateForward(componente);
  }

}
