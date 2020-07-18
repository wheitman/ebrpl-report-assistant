import { Page } from './page';
export interface Report {
  id: string;
  templateID: string;
  title: string;
  coverageDate?: Object;
  additionalInfo?: string;
  pageStatuses: string[];
  pageCount: number;
  metaSection: Object;
  pages: Array<Object>;
  completionStatus: string;
}
