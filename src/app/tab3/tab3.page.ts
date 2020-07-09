import { Component, OnInit } from '@angular/core';
import { PacienteDto } from '../models/paciente.dto';
import { ToastController, NavController } from '@ionic/angular';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  title = 'Associar Leito';

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
    this.pacienteService.buscaTodosSemLeito().subscribe(
      (resposta) => {
        this.pacientes = resposta;
        this.pacientesSearch = this.pacientes;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  detalhar(paciente) {
    this.navCtrl.navigateForward(['/paciente-dados', 'pacienteId', paciente.id]);
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
