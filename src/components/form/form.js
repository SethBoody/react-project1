import React, { useState } from 'react';
import './form.css';
import {useDispatch, useSelector} from 'react-redux';
// import { addUser } from '../redux/api';
import { addUser } from '../redux/userSlice.js';


export default function Form() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
 
    const {loading , error} = useSelector(state => state.user)

    const dispatch = useDispatch();

    const handleSubmit =(e) =>{
        e.preventDefault();
       dispatch( addUser({name , email} )) 
    }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'> 
                <input type='text' placeholder='Enter Name' onChange={(e) =>setName(e.target.value)}/>
            </div>

            <div className='form-group'> 
                <input type='email' placeholder='Enter email'  onChange={(e) =>setEmail(e.target.value)}/>
            </div>

            

            {loading ? 'loading...' : <div className='form-group'> 
                <input type='submit' placeholder='Add User' />
            </div> }

            {error && 'ERROR !!'}

        </form>
    </div>
  )
}
