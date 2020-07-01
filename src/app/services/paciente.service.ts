import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LocalOrigemDto } from '../models/local_origem.dto';
import { PacienteDto } from '../models/paciente.dto';
import { PacienteNewDto } from '../models/paciente_new.dto';
import { LeitoPacienteDto } from '../models/leito-paciente.dto';
import { AltaPacienteDTO } from '../models/alta-paciente.dto';
import { DashBoardPacientesSexoDTO } from '../models/dashBoard-pacientes-sexo.dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  buscaTodos(): Observable<PacienteDto[]> {
    return this.http
      .get<PacienteDto[]>(`${API_CONFIG.baseUrl}/api/pacientes`);
  }

  dashBoardPacientesPorSexo(): Observable<DashBoardPacientesSexoDTO> {
    return this.http
      .get<DashBoardPacientesSexoDTO>(`${API_CONFIG.baseUrl}/api/pacientes/dashBoard/por-sexo`);
  }

  buscaTodosSemLeito(): Observable<PacienteDto[]> {
    return this.http
      .get<PacienteDto[]>(`${API_CONFIG.baseUrl}/api/pacientes/sem-leito`);
  }


  buscarPacientePorId(idPaciente: number) {
    return this.http
      .get<PacienteDto>(`${API_CONFIG.baseUrl}/api/pacientes/${idPaciente}`);
  }

  salvarPaciente(paciente: PacienteNewDto) {
    return this.http
      .post(`${API_CONFIG.baseUrl}/api/pacientes`, paciente);
  }

  salvarLeitoPaciente(leitoPaciente: LeitoPacienteDto) {
    return this.http
      .put(`${API_CONFIG.baseUrl}/api/pacientes/associar-leito/${leitoPaciente.idPaciente}/${leitoPaciente.idLeito}`, leitoPaciente);
  }

  concederAlta(altaDto: AltaPacienteDTO) {
    return this.http
      .put(`${API_CONFIG.baseUrl}/api/pacientes/alta/${altaDto.idPaciente}`, altaDto);
  }
}
