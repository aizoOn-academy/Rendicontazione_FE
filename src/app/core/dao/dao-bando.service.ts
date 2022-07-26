import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dtoBando } from '../dto/dto-bando';

@Injectable({
  providedIn: 'root'
})
export class DaoBandoService {

  constructor(private http: HttpClient) { }

  findAllBandi(): Observable<dtoBando[]> {
    return this.http.get<dtoBando[]>('http://localhost:3000/bandi');
  }
}
