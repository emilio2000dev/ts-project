
import {Product, Sizes} from './product.model'

export const products:Product[]=[];

export function addProduct(data:Product){
  products.push(data);
}

export const calcStock = ():number=>{
  return products.map(val=>val.stock).reduce((acc, curr)=>acc+ curr, 0);
}
