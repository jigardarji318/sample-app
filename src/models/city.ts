export interface City {
  code: string;
  name: string;
}

export interface ListResponse<T> {
  data: T[];
}
