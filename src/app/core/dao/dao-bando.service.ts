import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dtoBando } from '../dto/dto-bando';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL + '/announcements/';

@Injectable({
  providedIn: 'root'
})
export class DaoBandoService {

  constructor(private http: HttpClient) { }

  findAllBandi(): Observable<dtoBando[]> {
    return this.http.get<dtoBando[]>(API_URL);
  }
}
