(()=>{

  //TypeScript
  function suma(a: number, b: number): number {
    return a + b;
  }

  function holaMundo(): string {
    return "Hello, World!";
  }


  //También los retornos pueden ser más de un tipo de dato:
  function devolverMayor(a: number, b: number): number | string {
    if(a > b){
      // Retorna un número
      return a;
    } else if( b > a ) {
      // Retorna un número
      return b;
    }else {
      // Retorna un string
      return `Los números ${a} y ${b} son iguales`;
    }
  }


  function sumar(num1:number, num2:number){
    return num1 + num2;
  }

  console.log(sumar(10, 10))






})()
