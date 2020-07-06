import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LocalOrigemDto } from '../models/local_origem.dto';
import { LocalOrigemNewDto } from '../models/local_origem-new.dto';

@Injectable({
  providedIn: 'root'
})
export class OrigemService {

  constructor(private http: HttpClient) { }

  buscaTodos(): Observable<LocalOrigemDto[]> {
    return this.http
      .get<LocalOrigemDto[]>(`${API_CONFIG.baseUrl}/api/local-origem`);
  }

  buscaPorId(localOrigemId: number): Observable<LocalOrigemNewDto> {
    return this.http
      .get<LocalOrigemNewDto>(`${API_CONFIG.baseUrl}/api/local-origem/${localOrigemId}`);
  }


  salvarLocalOrigem(localOrigem: LocalOrigemNewDto) {
    return this.http
      .post(`${API_CONFIG.baseUrl}/api/local-origem`, localOrigem);
  }

  deletaLocalOrigem(idLocalOrigem) {
    return this.http
      .delete(`${API_CONFIG.baseUrl}/api/local-origem/${idLocalOrigem}`);
  }
}
