import { dtoBando } from "./dto-bando";
import { dtoOperator } from "./dto-operatore";

export interface dtoDomanda {
  announcementApplicationId?: number;
  operator: dtoOperator;
  announcement: dtoBando;

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
