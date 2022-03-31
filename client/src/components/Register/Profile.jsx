import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {ProfileThunk} from '../../redux/thunk/ThunkPosts'


function Profile() {
   const dispatch = useDispatch();
   const profileDate = useSelector(state => state.register)


   const DataUser = () => {
      dispatch(ProfileThunk())
   }


   useEffect(() => {
      DataUser()
     
   }, [])
   


  return (
    <div className='container mt-5'>
       <br />
       <br />
       <h3>Добрый день</h3>
       <h1 className='card p-5'>Имя: {profileDate.username}</h1>
       <h1 className='card p-5'>Email: {profileDate.useremail}</h1>
       <br />

    </div>
  )
}

export default Profile
