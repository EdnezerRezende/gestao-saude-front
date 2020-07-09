import { Component, OnInit } from '@angular/core';
import { LeitoDto } from 'src/app/models/leito.dto';
import { LeitoNewDto } from 'src/app/models/leito-new.dto';
import { NavController, ToastController, IonItemSliding, AlertController } from '@ionic/angular';
import { LeitoService } from 'src/app/services/leito.service';
import { SexoEnum } from 'src/app/models/Enum/sexo.enum';
import { CampoApresentacaoDTO } from 'src/app/models/campo-apresentacao.dto';

@Component({
  selector: 'app-leito-listar',
  templateUrl: './leito-listar.page.html',
  styleUrls: ['./leito-listar.page.scss'],
})
export class LeitoListarPage implements OnInit {
  title = 'Listar Leitos';
  leitos = new Array<LeitoDto>();
  leitosSearch = new Array<LeitoDto>();

  quantidadeTotal = 0;
  quantidadeMasculino = 0;
  quantidadeFeminino = 0;

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public leitoService: LeitoService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obterLista();
  }
  obterLista(){
    this.leitoService.buscaTodosLeitos().subscribe(
      (resposta) => {
        this.leitos = resposta;
        this.leitosSearch = this.leitos;
        this.calcularQuantidades(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private calcularQuantidades(isDelete: boolean) {
    this.quantidadeMasculino = 0;
    this.quantidadeFeminino = 0;
    this.quantidadeTotal = this.leitosSearch.length;
    this.leitosSearch.forEach(leito => {
      if (leito.setor === 'MASCULINO') {
        if (!isDelete){
          this.quantidadeMasculino += 1;
        } else {
          this.quantidadeMasculino -= 1;
        }
      }
      else {
        if (!isDelete){
          this.quantidadeFeminino += 1;
        } else {
          this.quantidadeFeminino -= 1;
        }
      }
    });
  }

  async deletar(leito: LeitoDto, slidingItem: IonItemSliding) {
    const alert = await this.alertCtrl
      .create({
        header: 'Excluir',
        message: `O Leito de número ` + leito.numeroLeito + ` será deletado, deseja continuar?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.deletarConfirmado(leito);
            },
          },
          { text: 'Não' },
        ],
      });
    await alert.present();

    slidingItem.close();
  }

  async deletarConfirmado(item: LeitoDto) {
    this.leitoService.deletaLeito(item.id).subscribe(
      () => {
        const lista = this.leitos.slice(0);
        const index = lista.indexOf(item);
        if (index !== -1) {
          lista.splice(index, 1);
          this.leitos = lista;
          this.leitosSearch = this.copiaLista();
          this.calcularQuantidades(true);
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

  detalhar(leito, slidingCase) {
    this.navCtrl.navigateForward(['/leito-detalhar', 'leitoId', leito.id]);
    slidingCase.close();
  }

  alterar(leito, slidingCase: IonItemSliding){
    this.navCtrl.navigateForward(['/leito-cadastrar', 'leitoId', leito.id]);
    slidingCase.close();
  }

  copiaLista() {
    return this.leitos;
  }

  getItems(ev: any) {

    this.leitosSearch = this.copiaLista();
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.leitosSearch = this.leitosSearch.filter((item) => {
        return (
          item.ala.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          val.indexOf(item.numeroLeito.valueOf()) > -1 ||
          item.setor.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

}
