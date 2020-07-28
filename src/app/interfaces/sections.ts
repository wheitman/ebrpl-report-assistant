export interface SectionInterface {
  title: string;
  value: any;
  type: string;
  index: number;
  subtitle?: string;
  meta?: boolean;
}

export interface DatagridInterface extends SectionInterface {
  columns: Column[];
}

export interface SimpleInputInterface extends SectionInterface {
  inputs: Input[];
}

export interface Tag {
  label: string;
  icon: string;
}

export interface Column {
  label: string;
  /**
   * AVAILABLE TYPES:
   * date-select
   * month-select
   * division-select
   * text
   * textarea
   * number
   * tag-select
   */
  type: string;
  tags?: Tag[];
}

export interface Input {
  label: string;
  /**
   * AVAILABLE TYPES:
   * date-select
   * month-select
   * division-select
   * text
   * number
   * tag-select
   */
  type: string;
  tags?: Tag[];
  link?: string;
}
