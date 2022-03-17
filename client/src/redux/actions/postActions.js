
//ЗАБОР РЕГИСТРАЦИИ 
export const RegaAction = (rega) => {
   console.log(rega, 'ACTION POST');
   return {
      type: 'ALL_REGA',
      payload: rega,
   }


}



