import axios from 'axios'
import {RegaAction,ClearAction} from '../actions/postActions'

axios.defaults.withCredentials=true

export const ProfileThunk = () => {
   return async (dispatch) => {
     const response = await axios.get(`users/profile`)
        const data = response.data
         dispatch(RegaAction(data))
   }

}

export const LogoutThunk = () => {
   return async (dispatch) => {
      const response = await axios(`http://localhost:3001/users/logout`)
      dispatch(ClearAction())
   }
}


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


export const LoginRegaThunk = (rega) =>{
   return async (dispatch) => {

      try {
         const response = await axios.post(`http://localhost:3001/users/signin`, rega)
         const data = response.data 
         if(data.user) {
            dispatch(RegaAction(data))
         window.location = '/profile'
         }
      if(data.wrong){
         window.location = '/login'
         alert('неверный пароль')
         }
        
         if(data.errLogin){
            window.location = '/register'
            alert('зарегистрируйся')
            }
      } catch (error) {
         console.log(error);
        
      }
      
   }

}






