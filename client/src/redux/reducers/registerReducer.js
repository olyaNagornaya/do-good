const registerReducer = (state = {}, action) => {
   const {type, payload} = action
   switch (type) {
      case 'ALL_REGA':
      return payload;

      case 'CLEAR_REGA':  
      return [];
      case 'AUTH':
         return { name: action.payload };
      default:
       return state;
   }
}

export default registerReducer;
