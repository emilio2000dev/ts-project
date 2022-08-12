(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales
  type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
  }

  const products: Product[]=[];

  function addProduct(data:Product){
    products.push(data);
  }

  addProduct({
    title:'Manzana',
    createdAt: new Date(),
    stock:10,
    size:'M'

  })




})()
