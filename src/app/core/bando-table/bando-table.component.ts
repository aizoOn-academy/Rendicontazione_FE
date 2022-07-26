import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DaoBandoService } from '../dao/dao-bando.service';
import { dtoBando } from '../dto/dto-bando';

@Component({
  selector: 'app-bando-table',
  templateUrl: './bando-table.component.html',
  styleUrls: ['./bando-table.component.scss']
})
export class BandoTableComponent implements OnInit {

  listaBandi: dtoBando[] = [];

  constructor(private router: Router, private daoBando: DaoBandoService) { }

  ngOnInit(): void {
    this.daoBando.findAllBandi().subscribe(data => this.listaBandi = data);
  }

  openDomande(bando: dtoBando) {
    this.router.navigateByUrl('home/domanda');
  }

}
