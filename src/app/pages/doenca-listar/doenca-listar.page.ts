import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, IonItemSliding } from '@ionic/angular';
import { DoencaService } from 'src/app/services/doenca.service';
import { DoencaDto } from 'src/app/models/doenca.dto';

@Component({
  selector: 'app-doenca-listar',
  templateUrl: './doenca-listar.page.html',
  styleUrls: ['./doenca-listar.page.scss'],
})
export class DoencaListarPage implements OnInit {
  title = 'Listar Doenças';

  doencas = new Array<DoencaDto>();
  doencasSearch = new Array<DoencaDto>();

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public doencaService: DoencaService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obterLista();
  }

  obterLista(){
    this.doencaService.buscaTodosdoencas().subscribe(
      (resposta) => {
        this.doencas = resposta;
        this.doencasSearch = this.doencas;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async deletar(doenca: DoencaDto, slidingItem: IonItemSliding) {
    const alert = await this.alertCtrl
      .create({
        header: 'Excluir',
        message: `A Doença ` + doenca.nomeDoenca + ` será deletada, deseja continuar?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.deletarConfirmado(doenca);
            },
          },
          { text: 'Não' },
        ],
      });
    await alert.present();

    slidingItem.close();
  }

  async deletarConfirmado(item: DoencaDto) {
    this.doencaService.deletaDoenca(item.id).subscribe(
      () => {
        const lista = this.doencas.slice(0);
        const index = lista.indexOf(item);
        if (index !== -1) {
          lista.splice(index, 1);
          this.doencas = lista;
          this.doencasSearch = this.copiaLista();
        }
      },
      async error => {
        console.log(error);
        const alerta = await this.alertCtrl
          .create({
            header: 'Falha',
            message:
              'Não foi possível apagar esta doença, tente novamente mais tarde!',
            buttons: [
              {
                text: 'Ok',
              },
            ],
          });
        await alerta.present();
      }
    );
  }

  detalhar(doenca, slidingCase) {
    this.navCtrl.navigateForward(['/doenca-detalhar', 'doencaId', doenca.id]);
    slidingCase.close();
  }

  alterar(doenca, slidingCase: IonItemSliding){
    this.navCtrl.navigateForward(['/doenca-cadastrar', 'doencaId', doenca.id]);
    slidingCase.close();
  }

  copiaLista() {
    return this.doencas;
  }

  getItems(ev: any) {

    this.doencasSearch = this.copiaLista();
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.doencasSearch = this.doencasSearch.filter((item) => {
        return (
          item.nomeDoenca.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }


}
