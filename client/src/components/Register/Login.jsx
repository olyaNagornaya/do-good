import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AddRegaThunk} from '../redux/thunk/ThunkPosts' // ОТПРАВКА НА САНКИ




function Login() {

   const dispatch = useDispatch() 
   const [login, setLogin] = useState({email:'',password:''})



   const addLogin =  (e) => {
      e.preventDefault()
      dispatch(AddRegaThunk(login))
      setLogin({email:'',password:''})

   }





  return (
    <div>



<form style={{width: '500px'}} className='container'>


<div className="mb-3 " >
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input onChange={e => setLogin({...login, email: e.target.value}) } value={login.email} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email'/>
</div>

<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input onChange={e => setLogin({...login, password: e.target.value}) } value={login.password} name='password' type="password" className="form-control" id="exampleInputPassword1"  placeholder='password'/>
</div>

<button onClick={addLogin} type="submit" className="btn btn-primary">Submit</button>
</form>




    </div>
  )
}

export default Login
