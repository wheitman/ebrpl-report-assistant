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
  pages: Array<Object>;
  completionStatus: string;
}
