(()=>{

  //Any puede almacenar cualquier valor
  let myDybamicVar:any;
  myDybamicVar = 100;
  myDybamicVar = null;
  myDybamicVar = {};
  myDybamicVar=[];
  myDybamicVar='';
  myDybamicVar=true;


  let arrayAny:any;

  //Tratar Any como un primitivo
  //Caso 1
  let myDynamicVarString = "HOLA";
  const otherString = (myDynamicVarString as string).toLowerCase();

  //Caso 2
  let myDynamicVarNum = 1212;
  const otherNumber = (<number>myDynamicVarNum).toFixed();

  console.log('jgjgjhgj')

})
