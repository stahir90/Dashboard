export interface Population {
  State: string;
  Year: string;
  Population: number;
}

export interface Response {
  data: Array<Population>;
  source: Array<any>;
}
