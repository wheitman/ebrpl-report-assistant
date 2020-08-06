import { Page } from './page';
export interface Report {
  id: string;
  templateID: string;
  title?: string;
  category?: string;
  tags?: Object[];
  hidden?: boolean;
  coverageDate?: string;
  submitDate?: string;
  author?: string;
  branch?: string;
  additionalInfo?: string;
  pageStatuses: string[];
  pageCount: number;
  completionStatus: string;

  //NOTE: pages are stored separately, since they're in a collection
  //on the database, not part of the document per se. A UnifiedReport
  //has pages stored in the Report object.
}

export interface UnifiedReport {
  id: string;
  templateID: string;
  title?: string;
  tags?: string;
  category?: string;
  coverageDate?: string;
  submitDate?: string;
  author?: string;
  branch?: string;
  additionalInfo?: string;
  pageStatuses: string[];
  pageCount: number;
  completionStatus: string;
  pages: Page[];
}
