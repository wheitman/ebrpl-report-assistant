import { SectionInterface } from './sections';

export interface Page {
  title: string;
  subtitle?: string;
  number?: number;
  sections: Object[]; //SectionInterface or sibling
}
