(()=>{

  //Alias
  type UserID = string | boolean | number;

  let dynamicVar: UserID = "300";

  dynamicVar = true;
  dynamicVar = 200;

  //Los Union Types
  function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
  }

  //Tipos Literales (Literal Types)
  let shirtSize: "S" | "M" | "L" | "XL";
  shirtSize = "M"; //CORRECTO
  shirtSize = "S"; //CORRECTO
  shirtSize = "qwrty"; //ERROR. No está en las opciones.
  shirtSize = "SS"; //ERROR. Letra de más.
  shirtSize = "m"; //ERROR. Está en minúscula.


  //Alias + Tipos Literales
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSizeExample: Sizes;
  shirtSizeExample = "M";

  function yourSize( userSize: Sizes ){
    console.log(`Tu medida es ${userSize}`);
  }


  console.log('kdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjgewi')


})
