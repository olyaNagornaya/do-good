import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AddRegaThunk} from '../redux/thunk/ThunkPosts' // ОТПРАВКА НА САНКИ
// import { useHistory } from 'react-router-dom';


function Registation() {

   
   // const history = useHistory() x3 что это
   const dispatch = useDispatch() 
   const [registation, setRegistation] = useState({name: '', email:'',password:''})

   const addRegister =  (e) => {
      e.preventDefault()
      dispatch(AddRegaThunk(registation))
      setRegistation({name:'',email:'',password:''})

   }










  return (
    <div>

       <form style={{width: '500px'}} className='container'>

       <div className="mb-3 " >
    <label htmlFor="exampleInputName1" className="form-label">Имя</label>
    <input onChange={e => setRegistation({...registation, name: e.target.value}) } value={registation.name} name='name' type="email" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder='name'/>
  </div>
       
  <div className="mb-3 " >
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={e => setRegistation({...registation, email: e.target.value}) } value={registation.email} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email'/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={e => setRegistation({...registation, password: e.target.value}) } value={registation.password} name='password' type="password" className="form-control" id="exampleInputPassword1"  placeholder='password'/>
  </div>
 
  <button onClick={addRegister} type="submit" className="btn btn-primary">Submit</button>
</form>




    </div>
  )
}

export default Registation
