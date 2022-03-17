const registerReducer = (state = [], action) => {
   const {type, payload} = action
   switch (type) {
    
      case 'ALL_REGA':  
      console.log(payload, 'Пришло????');
      return payload;


      default:
       return state; // STATE - ПРЕДЫДУЩИЕ СОСТОЯНИЕ
   }


}

export default registerReducer;
