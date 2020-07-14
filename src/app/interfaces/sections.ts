export interface SectionInterface {
  title: string;
  data: any;
  type: string;
  index: number;
  subtitle?: string;
  extras?: Object;
  tags?: Object[];
}

export interface DatagridInterface extends SectionInterface {
  columns: Object[];
}

export interface SimpleInputInterface extends SectionInterface {
  inputs: Object[];
}
