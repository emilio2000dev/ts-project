(()=>{

  let userId: number | string;

  userId = 0;
  userId = '1';

  function greeting(myText: string | number){
    if(typeof myText == 'string'){
        console.log(`string ${myText.toLowerCase()}`)

    } else {
        console.log(`number ${myText.toFixed(1)}`)

    }
  }
  
  greeting('Migue');
  greeting(13.313);





})
