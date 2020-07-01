import { Component, OnInit } from '@angular/core';
import { PacienteDto } from '../models/paciente.dto';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { ToastController, NavController } from '@ionic/angular';
import { AltaPacienteDTO } from '../models/alta-paciente.dto';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-paciente-alta',
  templateUrl: './paciente-alta.page.html',
  styleUrls: ['./paciente-alta.page.scss'],
})
export class PacienteAltaPage implements OnInit {

  paciente = new PacienteDto();
  title = 'Alta de Paciente';
  texto: string;
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.criarFormulario();
    const pacienteId = this.route.snapshot.paramMap.get('id');

    this.pacienteService.buscarPacientePorId(Number(pacienteId)).subscribe(resposta => {
      this.paciente = resposta;
    }, erro => {
      console.log('Deu ruim');
    });
  }

  private criarFormulario(){
    this.formulario = this.fb.group({
      texto: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 === e2 : e1 === e2;
  }

  concederAlta(){
    const alta = new AltaPacienteDTO();
    alta.idPaciente = this.paciente.id;
    alta.textoAlta = this.formulario.get('texto').value;

    this.pacienteService.concederAlta(alta).subscribe(async resposta => {
      const toast = await this.toastController.create({
        header: 'Sucesso',
        message: 'Paciente recebeu Alta!',
        position: 'top',
        animated: true,
        color: 'success',
        duration: 2000
      });
      toast.present();
      this.navCtrl.navigateBack('/tabs/tab4');

    }, async erro => {
      const toast = await this.toastController.create({
        header: 'Erro',
        message: 'Ocorreu um erro, tente novamente em alguns instantes!',
        position: 'top',
        animated: true,
        color: 'danger',
        duration: 2000
      });
      toast.present();
    });
  }

}
