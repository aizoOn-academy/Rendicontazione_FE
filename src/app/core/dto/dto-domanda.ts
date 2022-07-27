export interface dtoDomanda {
  requestId?: number;
  operatorId: number;
  announcmentId: number;

  applicantFiscalCode: string;
  applicantName: string;
  applicantSurname: string;
  applicantAddress: string;
  applicantCityCap: string;
  applicantCity: string;
  applicantNation: string;
  applicantPhone: string;
  applicantIban: string;

  moneyAmount: number;
  approvedMoneyAmount: number;

  note: string;
  approvationStatus: boolean;
}
