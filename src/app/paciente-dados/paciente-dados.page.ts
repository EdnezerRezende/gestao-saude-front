import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteDto } from '../models/paciente.dto';
import { PacienteService } from '../services/paciente.service';
import { LeitoService } from '../services/leito.service';
import { LeitoDto } from '../models/leito.dto';
import { LeitoPacienteDto } from '../models/leito-paciente.dto';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-paciente-dados',
  templateUrl: './paciente-dados.page.html',
  styleUrls: ['./paciente-dados.page.scss'],
})
export class PacienteDadosPage implements OnInit {

  paciente = new PacienteDto();
  title = 'Associação de Leito';
  leitos = new Array<LeitoDto>();

  podeSalvar = false;

  leitoPaciente = new LeitoPacienteDto();

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private leitoService: LeitoService,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('id');

    this.pacienteService.buscarPacientePorId(Number(pacienteId)).subscribe(resposta => {
      this.paciente = resposta;
      this.leitoService.buscaTodosLeitosDisponíveisPorSexo(this.paciente.sexo).subscribe(resposta => {
        this.leitos = resposta;
      }, erro => {
        console.log(erro);
      });
    }, erro => {
      console.log('Deu ruim');
    });

  }

  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 === e2 : e1 === e2;
  }

  gravarLeito(event) {
    this.paciente.leitos.push(event.detail.value);
    this.leitoPaciente.idLeito = this.paciente.leitos[0].id;
    this.leitoPaciente.idPaciente = this.paciente.id;
    this.podeSalvar = true;
  }

  salvar(){
    this.pacienteService.salvarLeitoPaciente(this.leitoPaciente).subscribe(async resposta => {
      const toast = await this.toastController.create({
        header: 'Sucesso',
        message: 'Leito associado ao Paciente!',
        position: 'top',
        animated: true,
        color: 'success',
        duration: 2000
      });
      toast.present();
      this.podeSalvar = false;
      this.navCtrl.navigateBack('/tabs/tab3');

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
