export interface Population {
  State: string;
  Year: string;
  Population: number;
}

export interface Response {
  data: PopulationList;
  source: Array<any>;
}

export type PopulationList = Array<Population>;
