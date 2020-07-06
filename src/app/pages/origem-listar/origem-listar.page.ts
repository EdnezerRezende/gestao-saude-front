import { Component, OnInit } from '@angular/core';
import { LocalOrigemDto } from 'src/app/models/local_origem.dto';
import { NavController, ToastController, AlertController, IonItemSliding } from '@ionic/angular';
import { OrigemService } from 'src/app/services/origem.service';

@Component({
  selector: 'app-origem-listar',
  templateUrl: './origem-listar.page.html',
  styleUrls: ['./origem-listar.page.scss'],
})
export class OrigemListarPage implements OnInit {
  title = 'Listar Origens';

  localOrigem = new Array<LocalOrigemDto>();
  localOrigemSearch = new Array<LocalOrigemDto>();

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public localOrigemService: OrigemService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obterLista();
  }
  obterLista(){
    this.localOrigemService.buscaTodos().subscribe(
      (resposta) => {
        this.localOrigem = resposta;
        this.localOrigemSearch = this.localOrigem;
      },
      (error) => {
        console.log(error);
      }
    );
  }

   async deletar(localOrigem: LocalOrigemDto, slidingItem: IonItemSliding) {
    const alert = await this.alertCtrl
      .create({
        header: 'Excluir',
        message: `O Local de Origem ` + localOrigem.nomeOrigem + ` será deletado, deseja continuar?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.deletarConfirmado(localOrigem);
            },
          },
          { text: 'Não' },
        ],
      });
    await alert.present();

    slidingItem.close();
  }

  async deletarConfirmado(item: LocalOrigemDto) {
    this.localOrigemService.deletaLocalOrigem(item.id).subscribe(
      () => {
        const lista = this.localOrigem.slice(0);
        const index = lista.indexOf(item);
        if (index !== -1) {
          lista.splice(index, 1);
          this.localOrigem = lista;
          this.localOrigemSearch = this.copiaLista();
        }
      },
      async error => {
        console.log(error);
        const alerta = await this.alertCtrl
          .create({
            header: 'Falha',
            message:
              'Não foi possível apagar este leito, tente novamente mais tarde!',
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

  detalhar(localOrigem, slidingCase) {
    this.navCtrl.navigateForward(['/origem-detalhar', 'localOrigem', localOrigem.id]);
    slidingCase.close();
  }

  alterar(localOrigem, slidingCase: IonItemSliding){
    this.navCtrl.navigateForward(['/origem-cadastrar', 'localOrigem', localOrigem.id]);
    slidingCase.close();
  }

  copiaLista() {
    return this.localOrigem;
  }

  getItems(ev: any) {

    this.localOrigemSearch = this.copiaLista();
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.localOrigemSearch = this.localOrigemSearch.filter((item) => {
        return (
          item.nomeOrigem.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

}
