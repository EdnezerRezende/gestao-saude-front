import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LocalOrigemDto } from '../models/local_origem.dto';

@Injectable({
  providedIn: 'root'
})
export class OrigemService {

  constructor(private http: HttpClient) { }

  buscaTodos(): Observable<LocalOrigemDto[]> {
    return this.http
      .get<LocalOrigemDto[]>(`${API_CONFIG.baseUrl}/api/local-origem`);
  }
}
