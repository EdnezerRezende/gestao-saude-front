import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController, AlertController, ToastController, IonItemSliding } from '@ionic/angular';
import { PacienteDto } from 'src/app/models/paciente.dto';

@Component({
  selector: 'app-pacientes-listagem',
  templateUrl: './pacientes-listagem.component.html',
  styleUrls: ['./pacientes-listagem.component.scss'],
})
export class PacientesListagemComponent implements OnInit {

  @Input()
  listaSearch: any[];

  @Output()
  detalharRetorno = new EventEmitter<PacienteDto>();

  @Output()
  deletarRetorno = new EventEmitter<PacienteDto>();

  @Output()
  alterarRetorno = new EventEmitter<PacienteDto>();

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }


  deletar(paciente, slidingItem: IonItemSliding) {
    this.deletarRetorno.emit(paciente);
    slidingItem.close();
  }

  detalhar(paciente, slidingCase: IonItemSliding) {
    this.detalharRetorno.emit(paciente);
    slidingCase.close();
  }

  alterar(paciente, slidingCase: IonItemSliding){
    this.alterarRetorno.emit(paciente);
    slidingCase.close();
  }


}
