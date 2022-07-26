import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dtoDomanda } from '../dto/dto-domanda';

@Injectable({
  providedIn: 'root'
})
export class DaoDomandaService {

  constructor(private http: HttpClient, ) { }

  findAllDomande(): Observable<dtoDomanda[]> {
    return this.http.get<dtoDomanda[]>('http://localhost:3000/domande');
  }
}
