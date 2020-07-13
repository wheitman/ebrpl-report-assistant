import { Page } from './page';
export interface Report {
  id: string;
  templateID: string;
  title: string;
  coverageDate?: Object;
  additionalInfo?: string;
  pageStatuses: string[];
  pageCount: number;
  pages: Array<Object>;
}
