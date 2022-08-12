
export type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales


export type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
  }
