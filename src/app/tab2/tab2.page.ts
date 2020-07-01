import { Component, OnInit } from '@angular/core';
import { PacienteDto } from '../models/paciente.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OrigemDto } from '../models/origem.dto';
import { ComorbidadeDto } from '../models/comorbidade.dto';
import { SexoEnum } from '../models/Enum/sexo.enum';
import { OrigemService } from '../services/origem.service';
import { LocalOrigemDto } from '../models/local_origem.dto';
import { ComorbidadeService } from '../services/comorbidade.service';
import { DoencaDto } from '../models/doenca.dto';
import { PacienteService } from '../services/paciente.service';
import { PacienteNewDto } from '../models/paciente_new.dto';
import { async } from '@angular/core/testing';
import * as moment from 'moment';
import { DataUtil } from '../util/date-util';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  title = 'Cadastro de Pacientes';

  paciente: PacienteDto = new PacienteDto();

  formulario: FormGroup;
  sexos = Object.keys(SexoEnum);

  localOrigemDTO = Array<LocalOrigemDto>();
  doencas = Array<DoencaDto>();

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private localOrigemService: OrigemService,
    private comorbidadeService: ComorbidadeService,
    private pacienteService: PacienteService,
    public toastController: ToastController
  ) {}

  ngOnInit(){
    this.criarFormulario();
    this.obterSelects();

  }

  private obterSelects() {
    this.obterLocaisOrigens();

    this.obterDoencas();
  }

  private obterDoencas() {
    this.comorbidadeService.buscaTodas().subscribe(
      (resposta) => {
        this.doencas = resposta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private obterLocaisOrigens() {
    this.localOrigemService.buscaTodos().subscribe(
      (resposta) => {
        this.localOrigemDTO = resposta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private criarFormulario(){
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', [Validators.required]],
      numeroSES: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      origem: ['', [Validators.required]],
      comorbidades: ['', [ Validators.required]],
      dataAdmissaoHCMG: ['', [Validators.required]],
    });
  }

  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 === e2 : e1 === e2;
  }

  limparFormulario(){
    this.formulario.reset();
    this.criarFormulario();
  }

  salvar(){
    console.log(this.formulario.value);
    const paciente = this.montarDTO();

    this.pacienteService.salvarPaciente(paciente).subscribe(async resposta => {
      const toast = await this.toastController.create({
        header: 'Sucesso',
        message: 'Paciente Salvo com sucesso, associe um leito!',
        position: 'top',
        animated: true,
        color: 'success',
        duration: 2000
      });
      toast.present();
      this.limparFormulario();
    },
    async error => {
      const toast = await this.toastController.create({
        header: 'Erro',
        message: 'Paciente não foi salvo, tente em alguns instantes!',
        position: 'top',
        animated: true,
        color: 'danger',
        duration: 2000

      });
      toast.present();
    });
  }

  private montarDTO() {
    const paciente = new PacienteNewDto();
    paciente.nome = this.formulario.controls.nome.value;
    paciente.sexo = this.formulario.controls.sexo.value;
    paciente.numeroSES = this.formulario.controls.numeroSES.value;2
    paciente.dataNascimento = DataUtil.DateParaString(this.formulario.controls.dataNascimento.value, 'DD/MM/YYYY');
    paciente.comorbidades = this.formulario.controls.comorbidades.value;
    paciente.origem = this.formulario.controls.origem.value;
    paciente.origem.dataAdmissaoOrigem = DataUtil.DateParaString(this.formulario.controls.dataAdmissaoHCMG.value, 'DD/MM/YYYY hh:mm');
    return paciente;
  }
}
