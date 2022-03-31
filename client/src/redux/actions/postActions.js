
export const RegaAction = (rega) => {
   return {
      type: 'ALL_REGA',
      payload: rega,
   }

}



export const ClearAction = () => {
   return {
      type: 'CLEAR_REGA',
      payload: [],
   }
}



