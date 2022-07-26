export interface dtoDomanda {
  requestId?: number;
  operatorId: number;
  announcmentId: number;
  applicantFiscalCode: string;
  applicantName: string;
  applicantCognome: string;
  applicantAddress: string;
  applicantCityCap: string;
  applicantCity: string;
  applicantNation: string;
  applicantPhone: string;
  moneyAmount: number;
  applicantIban: string;
  note: string;
  approvationStatus: boolean;
}
