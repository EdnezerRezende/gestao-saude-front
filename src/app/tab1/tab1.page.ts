import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { PacienteDto } from '../models/paciente.dto';
import { DashBoardPacientesSexoDTO } from '../models/dashBoard-pacientes-sexo.dto';
import { LeitoService } from '../services/leito.service';
import { LeitoDto } from '../models/leito.dto';
import { AlaEnum } from '../models/Enum/ala.enum';
import { SexoEnum } from '../models/Enum/sexo.enum';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  title = 'DashBoard';
  data: any;
  leitosDisponiveis: any;
  dashBoardPacientesSexoDTO = new DashBoardPacientesSexoDTO();
  leitos = new Array<LeitoDto>();

  quantidadeFemininoALiberados = 0;
  quantidadeFemininoBLiberados = 0;
  quantidadeMasculinoALiberados = 0;
  quantidadeMasculinoBLiberados = 0;

  constructor(
    private pacienteService: PacienteService,
    private leitoService: LeitoService
  ) {}

  private obterDadosLeitos() {
    this.quantidadeFemininoALiberados = 0;
    this.quantidadeFemininoBLiberados = 0;
    this.quantidadeMasculinoALiberados = 0;
    this.quantidadeMasculinoBLiberados = 0;

    this.leitoService.buscaLeitosQuantitativo().subscribe(leitos => {
      this.leitos = leitos;
      this.leitos.forEach(leito => {
        if (leito.setor.toLowerCase() === SexoEnum.FEMININO.toLowerCase() ){
          if (leito.ala === AlaEnum.A){
            if (!leito.emUso){
              this.quantidadeFemininoALiberados += 1;
            }
          }else {
            if (!leito.emUso){
              this.quantidadeFemininoBLiberados += 1;
            }
          }
        } else {
          if (leito.ala === AlaEnum.A){
            if (!leito.emUso){
              this.quantidadeMasculinoALiberados += 1;
            }
          }else {
            if (!leito.emUso){
              this.quantidadeMasculinoBLiberados += 1;
            }
          }
        }
      });


      this.leitosDisponiveis = {
        labels: [
          'Femininos A : ' + this.quantidadeFemininoALiberados,
          'Femininos B : ' + this.quantidadeFemininoBLiberados,
          'Masculinos A : ' + this.quantidadeMasculinoALiberados,
          'Masculinos B : ' + this.quantidadeMasculinoBLiberados
        ],
        datasets: [
          {
            data: [
            this.quantidadeFemininoALiberados,
            this.quantidadeFemininoBLiberados,
            this.quantidadeMasculinoALiberados,
            this.quantidadeMasculinoBLiberados
            ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#565656'
            ],
            overBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#565656'
            ]
          }
        ]
      };
    });
  }

  private obterDadosPacientes() {
    this.pacienteService.dashBoardPacientesPorSexo().subscribe(resposta => {
      this.dashBoardPacientesSexoDTO = resposta;
      this.data = {
        labels: [ 'Feminino :' + this.dashBoardPacientesSexoDTO.quantidadeFeminino,
         'Masculino :' + this.dashBoardPacientesSexoDTO.quantidadeMasculino],
        datasets: [
          {
            data: [
            this.dashBoardPacientesSexoDTO.quantidadeFeminino,
            this.dashBoardPacientesSexoDTO.quantidadeMasculino
            ],
            backgroundColor: [
              '#FF6384',
              '#FFCE56'
            ],
            overBackgroundColor: [
              '#FF6384',
              '#FFCE56'
            ]
          }
        ]
      };
    });
  }

  ngOnInit(){
  }

  ionViewWillEnter(){
    this.data = '';
    this.leitosDisponiveis  = '';
    this.dashBoardPacientesSexoDTO = new DashBoardPacientesSexoDTO();
    this.leitos = new Array<LeitoDto>();
    this.obterDadosPacientes();
    this.obterDadosLeitos();
  }

}
