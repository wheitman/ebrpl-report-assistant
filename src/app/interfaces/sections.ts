export enum SectionType {
  Datagrid,
  PredefTable,
  SingleInput,
}

export interface SectionInterface {
  title: string;
  subtitle: string;
  data: any;
  type: SectionType;
}

export interface DatagridInterace extends SectionInterface {}
