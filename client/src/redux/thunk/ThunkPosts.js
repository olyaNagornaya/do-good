import axios from 'axios'
import {RegaAction} from '../actions/postActions'




//ЭТА ТЕМА ДЛЯ ТОГО ЧТОБЫ НЕ ПИСАТЬ ВЕЗДЕ В АКСИОСЕ withCredentials true
axios.defaults.withCredentials=true






//ОТПРАВКА ДАННЫХ С РЕГИСТРАЦИИ
export const AddRegaThunk = (rega) =>{
   return async (dispatch) => {

      try {

         const response = await axios.post(`http://localhost:3001/users/signup`, rega)
         const data = response.data 
         
         if(data.user) {
           window.location = '/profile'
            dispatch(RegaAction(data))
         }
         if(data.haveuser) {
            alert('Такой юзер уже есть')
         }

      } catch (error) {
         console.log(error);
      }
      
   }

}



//ОТПРАВКА ДАННЫХ С АВТОРИЗАЦИИ
export const LoginRegaThunk = (rega) =>{
   return async (dispatch) => {

      try {
         const response = await axios.post(`http://localhost:3001/users/signin`, rega)
         const data = response.data 
         if(data.zahodi) {
            console.log(data,'зашёл в профиль');
            dispatch(RegaAction(data))
         window.location = '/profile'
         }
      if(data.wrong){
         console.log('Ошибка пароля');
         window.location = '/login'
         alert('неверный пароль')
         }
        
         if(data.errLogin){
         console.log('нет юзера');
            window.location = '/register'
            alert('зарегистрируйся')
            }
      } catch (error) {
         console.log(error);
        
      }
      
   }

}






