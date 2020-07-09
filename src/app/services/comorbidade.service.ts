import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LocalOrigemDto } from '../models/local_origem.dto';
import { DoencaDto } from '../models/doenca.dto';

@Injectable({
  providedIn: 'root'
})
export class ComorbidadeService {

  constructor(private http: HttpClient) { }

  buscaTodas(): Observable<DoencaDto[]> {
    return this.http
      .get<DoencaDto[]>(`${API_CONFIG.baseUrl}/api/doencas`);
  }
}
