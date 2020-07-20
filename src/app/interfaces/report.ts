import { Page } from './page';
export interface Report {
  id: string;
  templateID: string;
  title: string;
  coverageDate?: string;
  submitDate?: string;
  submittedBy?: string;
  additionalInfo?: string;
  pageStatuses: string[];
  pageCount: number;
  completionStatus: string;

  //NOTE: pages are stored separately, since they're in a collection
  //on the database, not part of the document per se.
}
