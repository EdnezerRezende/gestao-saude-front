import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { PacienteService } from '../services/paciente.service';
import { PacienteDto } from '../models/paciente.dto';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  title = 'Conceder Alta';
  pacientes = new Array<PacienteDto>();
  pacientesSearch = new Array<PacienteDto>();

  constructor(
    private navCtrl: NavController,
    private pacienteService: PacienteService,
    public toastController: ToastController
  ) {}

  ngOnInit(){
  }

  ionViewWillEnter(){
    this.pacientes = new Array<PacienteDto>();
    this.pacientesSearch = new Array<PacienteDto>();
    this.obterSelects();
  }

  obterSelects(){
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

  detalhar(paciente, slidingCase) {
    this.navCtrl.navigateForward(['/paciente-alta', 'pacienteId', paciente.id]);
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
          item.numeroSES === val
        );
      });
    }
  }

}
