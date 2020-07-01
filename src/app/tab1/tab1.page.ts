import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { PacienteDto } from '../models/paciente.dto';
import { DashBoardPacientesSexoDTO } from '../models/dashBoard-pacientes-sexo.dto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  title = 'DashBoard';
  data: any;
  dashBoardPacientesSexoDTO = new DashBoardPacientesSexoDTO();

  constructor(private pacienteService: PacienteService) {

  }

  private obterDadosPacientes() {
    this.pacienteService.dashBoardPacientesPorSexo().subscribe(resposta => {
      this.dashBoardPacientesSexoDTO = resposta;
      this.data = {
        labels: [ 'Quantidade Feminino', 'Quantidade Masculino'],
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
    this.dashBoardPacientesSexoDTO = new DashBoardPacientesSexoDTO();
    this.obterDadosPacientes();
  }

}
