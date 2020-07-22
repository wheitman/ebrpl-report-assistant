export interface SectionInterface {
  title: string;
  value: any;
  type: string;
  index: number;
  subtitle?: string;
  tags?: Object[];
  meta?: boolean;
}

export interface DatagridInterface extends SectionInterface {
  columns: Object[];
}

export interface SimpleInputInterface extends SectionInterface {
  inputs: Object[];
}
