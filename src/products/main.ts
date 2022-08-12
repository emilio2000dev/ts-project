import {addProduct, products} from './product.service';

addProduct({
  title:'Manzana',
  createdAt: new Date(),
  stock:10,
  size:'M'

})

console.log(products)
