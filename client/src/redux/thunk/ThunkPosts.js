import axios from 'axios'
import {RegaAction} from '../actions/postActions'


//ДОБАВЛЕНИЕ, ПРИЁМ ДАННЫХ С ФРОНТА ДАЛЕЕ ПЕРЕДАЧА НА БЕК, ПРИЁМ С БЕКА, ОТПРАВКА НА ЭКШН
export const AddRegaThunk = (rega) =>{
   return async (dispatch) => {

      try {
         const response = await axios.post(`http://localhost:3001/users/signup`, rega,{withCredentials:true})
         const data = response.data 
         console.log(data, 'ответ с бека');
         dispatch(RegaAction(data))
      } catch (error) {
         
         console.log('ошибка',error);
      }
      
   }

}


export const LoginRegaThunk = (rega) =>{
   return async (dispatch) => {

      try {
         const response = await axios.post(`http://localhost:3001/users/signin`, rega,{withCredentials:true})
         const data = response.data 
         console.log(data, 'ответ с бека');
         dispatch(RegaAction(data))
      } catch (error) {
         console.log('ошибка',error);
      }
      
   }

}






