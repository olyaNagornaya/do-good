import axios from 'axios'
import {RegaAction} from '../actions/postActions'


//ДОБАВЛЕНИЕ, ПРИЁМ ДАННЫХ С ФРОНТА ДАЛЕЕ ПЕРЕДАЧА НА БЕК, ПРИЁМ С БЕКА, ОТПРАВКА НА ЭКШН
export const AddRegaThunk = (rega) =>{
   console.log(rega, 'пришло?');
   return async (dispatch) => {

   // const response = await axios.post(`http://localhost:3001/api`, rega)
   // const data = response.data 

   dispatch(RegaAction(rega))
   // dispatch(AddPostAction(post))
   // console.log('ssdadsads',data);

   }

}






