import { SectionInterface } from './sections';

export interface Page {
  title: string;
  subtitle?: string;
  index: number;
  sections: Object[]; //SectionInterface or sibling
}
