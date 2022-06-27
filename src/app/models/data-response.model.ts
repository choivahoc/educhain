export interface DataResponse<T> {
  status: number;
  error: string;
  data?: T;
}
