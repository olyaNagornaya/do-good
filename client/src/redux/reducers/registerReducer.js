const registerReducer = (state = {}, action) => {
   const {type, payload} = action
   switch (type) {
    
      case 'ALL_REGA':  
      return payload;
      //2
      case 'CLEAR_REGA':  
      return [];
      default:
       return state; // STATE - ПРЕДЫДУЩИЕ СОСТОЯНИЕ
   }


}

export default registerReducer;
