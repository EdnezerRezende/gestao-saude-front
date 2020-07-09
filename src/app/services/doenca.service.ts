import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { DoencaDto } from '../models/doenca.dto';

@Injectable({
  providedIn: 'root'
})
export class DoencaService {

  constructor(private http: HttpClient) { }

  buscaTodosdoencas(): Observable<DoencaDto[]> {
    return this.http
      .get<DoencaDto[]>(`${API_CONFIG.baseUrl}/api/doencas`);
  }

  buscaDoencaPorId(doencaId: number): Observable<DoencaDto> {
    return this.http
      .get<DoencaDto>(`${API_CONFIG.baseUrl}/api/doencas/${doencaId}`);
  }

  buscaTodosDoencasDisponiveis(): Observable<DoencaDto[]> {
    return this.http
      .get<DoencaDto[]>(`${API_CONFIG.baseUrl}/api/doencas/disponiveis`);
  }


  salvarDoenca(doenca: DoencaDto) {
    return this.http
      .post(`${API_CONFIG.baseUrl}/api/doencas`, doenca);
  }

  deletaDoenca(idDoenca) {
    return this.http
      .delete(`${API_CONFIG.baseUrl}/api/doencas/${idDoenca}`);
  }
}
