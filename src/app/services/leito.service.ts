import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LeitoDto } from '../models/leito.dto';
import { LeitoNewDto } from '../models/leito-new.dto';
import { LeitoOcupacaoDto } from '../models/leito-ocupacao.dto';

@Injectable({
  providedIn: 'root'
})
export class LeitoService {

  constructor(private http: HttpClient) { }

  buscaTodosLeitos(): Observable<LeitoDto[]> {
    return this.http
      .get<LeitoDto[]>(`${API_CONFIG.baseUrl}/api/leitos`);
  }

  buscaLeitosPorOcupacao(): Observable<LeitoOcupacaoDto[]> {
    return this.http
      .get<LeitoOcupacaoDto[]>(`${API_CONFIG.baseUrl}/api/leitos/leitos-ocupacao`);
  }

  buscaLeitosQuantitativo(): Observable<LeitoDto[]> {
    return this.http
      .get<LeitoDto[]>(`${API_CONFIG.baseUrl}/api/leitos/leitos-quantitativo`);
  }

  buscaTodosLeitoPorId(leitoId: number): Observable<LeitoDto> {
    return this.http
      .get<LeitoDto>(`${API_CONFIG.baseUrl}/api/leitos/${leitoId}`);
  }

  buscaTodosLeitosDisponíveis(): Observable<LeitoDto[]> {
    return this.http
      .get<LeitoDto[]>(`${API_CONFIG.baseUrl}/api/leitos/disponiveis`);
  }


  buscaTodosLeitosDisponíveisPorSexo(sexo: string): Observable<LeitoDto[]> {
    return this.http
      .get<LeitoDto[]>(`${API_CONFIG.baseUrl}/api/leitos/disponiveis/${sexo}`);
  }

  salvarLeito(leito: LeitoNewDto) {
    return this.http
      .post(`${API_CONFIG.baseUrl}/api/leitos`, leito);
  }

  deletaLeito(idLeito) {
    return this.http
      .delete(`${API_CONFIG.baseUrl}/api/leitos/${idLeito}`);
  }
}
