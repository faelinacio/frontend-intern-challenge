import {Product} from './product.model';

export class ApiResponse {
  constructor(
    public products: Product[],
    public nextPage: string
  ) {}
}
