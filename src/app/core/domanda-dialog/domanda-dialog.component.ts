import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DaoDomandaService } from '../dao/dao-domanda.service';
import { dtoDomanda } from '../dto/dto-domanda';

@Component({
  selector: 'app-domanda-dialog',
  templateUrl: './domanda-dialog.component.html',
  styleUrls: ['./domanda-dialog.component.scss']
})
export class DomandaDialogComponent implements OnInit {

  closeDialog = false;

  constructor(
    private daoDomanda: DaoDomandaService,
    public dialogRef: MatDialogRef<DomandaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dtoDomanda
  ) { }

  ngOnInit(): void {
  }

  sommaFinale(form: NgForm) {
    if(form.valid) {

      this.data.approvedMoneyAmount = form.value.sommaFinaleErogata;

      //chiamata al BE
      this.daoDomanda.patchDomanda(this.data).subscribe(response => console.log(response));

      this.closeDialog = true;
    }
  }

  statoDomanda(val: boolean) {
    this.data.approvationStatus = val;
  }
}
