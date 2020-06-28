import { AbstractSection } from '../components/sections/abstract-section/abstract-section.component';
export interface Page {
  title: string;
  subtitle: string;
  number: number;
  sections: AbstractSection[];
}
