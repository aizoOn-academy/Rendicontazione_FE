import { Component, OnInit } from '@angular/core';
import { DaoDomandaService } from '../dao/dao-domanda.service';
import { dtoDomanda } from '../dto/dto-domanda';

@Component({
  selector: 'app-domanda-table',
  templateUrl: './domanda-table.component.html',
  styleUrls: ['./domanda-table.component.scss']
})
export class DomandaTableComponent implements OnInit {

  listaDomande: dtoDomanda[] = []

  constructor(private daoDomanda: DaoDomandaService) { }

  ngOnInit(): void {
    this.daoDomanda.findAllDomande().subscribe(data => this.listaDomande = data);
  }

  displayedColumns: string[] = [
    'codiceFiscale',
    'nome',
    'cognome',
    'somma',
    'actions',
  ];

  openDomanda(domanda: dtoDomanda) {

  }

}
