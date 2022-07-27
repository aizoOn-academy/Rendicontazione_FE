import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dtoDomanda } from '../dto/dto-domanda';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL + '/applications/';

@Injectable({
  providedIn: 'root'
})
export class DaoDomandaService {

  constructor(private http: HttpClient, ) { }

  findAllDomande(): Observable<dtoDomanda[]> {
    return this.http.get<dtoDomanda[]>(API_URL);
  }

  findDomandeById(idBando: number): Observable<dtoDomanda[]> {
    return this.http.get<dtoDomanda[]>(API_URL + idBando);
  }
}
