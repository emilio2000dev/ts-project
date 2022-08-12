//Usando librerías que NO soportan TypeScript

//npm i lodash
//npm i --save-dev @types/lodash

import _ from 'lodash';

const data = [
  {
    username:'Emilio',
    role:'admin'
  },{
    username:'Juan',
    role:'admin'
  },{
    username:'Maria',
    role:'Customer'
  },
  {
    username:'Adiel',
    role:'Customer'
  }
]

const getUser = _.groupBy(data, item=>item.role);

console.log(getUser)
