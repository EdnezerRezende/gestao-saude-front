import { Component, OnInit } from '@angular/core';
import { PacienteDto } from 'src/app/models/paciente.dto';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-pacientes-com-leito',
  templateUrl: './pacientes-com-leito.page.html',
  styleUrls: ['./pacientes-com-leito.page.scss'],
})
export class PacientesComLeitoPage implements OnInit {

  title = 'Pacientes Com Leito';

  pacientesSearch = new Array<PacienteDto>();
  pacientes = new Array<PacienteDto>();

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public pacienteService: PacienteService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obterLista();
  }
  obterLista(){
    this.pacienteService.buscaTodos().subscribe(
      (resposta) => {
        this.pacientes = resposta;
        this.pacientesSearch = this.pacientes;
      },
      (error) => {
        console.log(error);
      }
    );
  }

   async deletar(paciente: PacienteDto) {
    const alert = await this.alertCtrl
      .create({
        header: 'Excluir',
        message: `O Paciente ` + paciente.nome + ` será deletado, deseja continuar?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.deletarConfirmado(paciente);
            },
          },
          { text: 'Não' },
        ],
      });
    await alert.present();

  }

  async deletarConfirmado(item: PacienteDto) {
    this.pacienteService.deletarPaciente(item.id).subscribe(
      () => {
        const lista = this.pacientes.slice(0);
        const index = lista.indexOf(item);
        if (index !== -1) {
          lista.splice(index, 1);
          this.pacientes = lista;
          this.pacientesSearch = this.copiaLista();
        }
      },
      async error => {
        console.log(error);
        const alerta = await this.alertCtrl
          .create({
            header: 'Falha',
            message:
              'Não foi possível apagar este paciente, tente novamente mais tarde!',
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

  detalhar(paciente) {
    this.navCtrl.navigateForward(['/paciente-dados', 'pacienteId', paciente.id, 'ehConsulta', true]);
  }

  alterar(paciente){
    this.navCtrl.navigateForward(['/tabs/tab2', 'pacienteId', paciente.id]);
  }

  copiaLista() {
    return this.pacientes;
  }

  getItems(ev: any) {

    this.pacientesSearch = this.copiaLista();
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.pacientesSearch = this.pacientesSearch.filter((item) => {
        return (
          item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.sexo.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

}
