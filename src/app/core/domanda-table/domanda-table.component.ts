import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DaoDomandaService } from '../dao/dao-domanda.service';
import { DomandaDialogComponent } from '../domanda-dialog/domanda-dialog.component';
import { dtoDomanda } from '../dto/dto-domanda';

@Component({
  selector: 'app-domanda-table',
  templateUrl: './domanda-table.component.html',
  styleUrls: ['./domanda-table.component.scss']
})
export class DomandaTableComponent implements OnInit {

  listaDomande: dtoDomanda[] = [];
  dataSource: dtoDomanda[] = [];
  gruppoSelezionato: string = "Ancora da approvare";

  displayedColumns: string[] = [
    'codiceFiscale',
    'nome',
    'cognome',
    'somma',
    'sommaConcessa',
    'actions',
  ];

  constructor(private daoDomanda: DaoDomandaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.daoDomanda.findAllDomande().subscribe(data => {
      this.listaDomande = data;
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == null);
    });
  }



  openDomanda(domanda: dtoDomanda) {
    const dialogRef = this.dialog.open(DomandaDialogComponent, {
      data: domanda
    });

    dialogRef
      .afterClosed()
      .subscribe(() => {});

  }

  selectedTab(event: MatTabChangeEvent) {
    if(event.tab.textLabel == "Non approvate") {
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == false);
    } else if (event.tab.textLabel == "Approvate"){
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == true);
    } else {
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == null);
    }

    this.gruppoSelezionato = event.tab.textLabel;
  }

}
