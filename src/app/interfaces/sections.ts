export enum SectionType {
  Datagrid,
  SimpleInput,
}

export interface SectionInterface {
  title: string;

  data: any;
  type: SectionType;
  index: number;
  complete: boolean;
  subtitle?: string;
  extras?: Object;
}

export interface DatagridInterface extends SectionInterface {
  columns: Object[];
  tags?: Object[];
}
