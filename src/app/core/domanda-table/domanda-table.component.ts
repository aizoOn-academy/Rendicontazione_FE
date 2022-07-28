import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private daoDomanda: DaoDomandaService, private dialog: MatDialog, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    let id: number;
    this.route.queryParams.subscribe(params => {

      id = Number(params['idBando']);

      //se voglio vedere tutte le domande
      if(!id) {

        this.daoDomanda.findAllDomande().subscribe(data => {
          this.listaDomande = data;
          this.selectedTab(this.gruppoSelezionato);
          //this.dataSource = this.listaDomande.filter(data => data.approvationStatus == null);
        });

      } else {

        //se voglio vedere le domande di un bando
        this.daoDomanda.findDomandeById(id).subscribe(data => {
          this.listaDomande = data;
          //this.selectedTab(this.gruppoSelezionato);
          this.dataSource = this.listaDomande.filter(data => data.approvationStatus == null);
        })
      }
    });
  }

  mostraTutteDomande() {

    this.router.navigate(['home/domanda'], {queryParams: {idBando: null}});
    //this.selectedTab(this.gruppoSelezionato);

  }

  downloadPDF() {
    //aggiungi la tua chiamata al BE
    //this.daoDomanda
  }

  openDomanda(domanda: dtoDomanda) {
    const dialogRef = this.dialog.open(DomandaDialogComponent, {
      data: domanda
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == null)
    });
  }

  selectedTab(event: MatTabChangeEvent | string) {

    let tmp = typeof event === 'string' ? (event as string) : (event as MatTabChangeEvent).tab.textLabel

    if(tmp == "Non approvate") {
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == false);
    } else if (tmp == "Approvate"){
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == true);
    } else {
      this.dataSource = this.listaDomande.filter(data => data.approvationStatus == null);
      tmp = "Ancora da approvare";
    }

    this.gruppoSelezionato = tmp;
  }

}
