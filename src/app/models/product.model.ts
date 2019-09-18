import {Installment} from './installment.model';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public oldPrice: number,
    public price: number,
    public description: string,
    public installments: Installment
  ) {}
}
