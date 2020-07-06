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

  isAlteracao = false;

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

  ionViewWillEnter(){
    const idPaciente = this.route.snapshot.paramMap.get('id');
    if (idPaciente !== null){
      this.pacienteService.buscarPacientePorId(Number(idPaciente)).subscribe(resposta => {
        this.paciente = resposta;
        console.log(this.paciente);
        this.montarDTOAlteracao();
        this.title = 'Alteração de Paciente';
        this.isAlteracao = true;
      }, erro => {
        console.log('Deu ruim');
      });
    } else {
      this.title = 'Cadastro de Pacientes';
    }
  }
  private obterSelects() {
    this.obterLocaisOrigens();

    this.obterDoencas();
  }

  async obterDoencas() {
    await this.comorbidadeService.buscaTodas().subscribe(
      (resposta) => {
        this.doencas = resposta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async obterLocaisOrigens() {
    await this.localOrigemService.buscaTodos().subscribe(
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

  montarDTOAlteracao(){
    this.formulario.get('nome').setValue(this.paciente.nome);
    this.formulario.get('sexo').setValue(this.paciente.sexo);
    this.formulario.get('numeroSES').setValue(this.paciente.numeroSES);
    this.formulario.get('dataNascimento').setValue(this.paciente.dataNascimento);
    this.formulario.get('origem').setValue(this.paciente.origem.localOrigem);

    const doencas = new Array<DoencaDto>();
    this.paciente.comorbidades.forEach(comorbidade => {
      const doenca = new DoencaDto();
      doenca.id = comorbidade.doenca.id;
      doenca.isDeletado = comorbidade.doenca.isDeletado;
      doenca.nomeDoenca = comorbidade.doenca.nomeDoenca;
      doencas.push(doenca);
    });
    this.formulario.get('comorbidades').setValue(doencas);
    this.formulario.get('dataAdmissaoHCMG').setValue(this.paciente.dataAdmissaoHCMG);
  }
  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 === e2 : e1 === e2;
  }

  compareFnOrigem(e1: LocalOrigemDto, e2: LocalOrigemDto): boolean {
    return e1.id && e2.id ? e1.id === e2.id : e1.id === e2.id;
  }


  compareFnComorbidades(e1: ComorbidadeDto, e2: ComorbidadeDto): boolean {
    return e1.id && e2.id  ? e1.id  === e2.id  : e1.id === e2.id;
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
      if (this.isAlteracao){
        this.title = 'Cadastro de Pacientes';
        this.isAlteracao = false;
        this.navCtrl.navigateBack('/pacientes-com-leito');
      }
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
    paciente.id = this.paciente.id;
    paciente.nome = this.formulario.controls.nome.value;
    paciente.sexo = this.formulario.controls.sexo.value;
    paciente.numeroSES = this.formulario.controls.numeroSES.value;
    paciente.dataNascimento = DataUtil.DateParaString(this.formulario.controls.dataNascimento.value, 'DD/MM/YYYY');
    paciente.comorbidades = new Array<ComorbidadeDto>();
    this.formulario.controls.comorbidades.value.forEach(comorbidade => {
      let doenca = new DoencaDto();
      doenca = comorbidade;
      const comorbidadeTemp = new ComorbidadeDto();
      comorbidadeTemp.doenca = doenca;
      comorbidadeTemp.id = comorbidade.id;
      paciente.comorbidades.push(comorbidadeTemp);
    });

    const origemTemp = this.formulario.get('origem').value;

    if ( !this.isAlteracao || this.paciente.origem.localOrigem.id !== origemTemp.id){
      paciente.origem = new OrigemDto();
      paciente.origem.localOrigem = this.formulario.controls.origem.value;
      paciente.origem.dataAdmissaoOrigem = DataUtil.DateParaString(this.formulario.controls.dataAdmissaoHCMG.value, 'DD/MM/YYYY hh:mm');
    } else {
      paciente.origem = this.paciente.origem;
      paciente.origem.dataAdmissaoOrigem = DataUtil.DateParaString(new Date(paciente.origem.dataAdmissaoOrigem), 'DD/MM/YYYY hh:mm');
    }

    return paciente;
  }
}
