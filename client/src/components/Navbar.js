import React from 'react'
import {Box,Link,Typography} from '@mui/material'
import { NavLink ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
const Navbar = () => {
  const navigate=useNavigate();
  const loggedIn=JSON.parse(localStorage.getItem("authToken"))
  // handle logout
  const handleLogout=async()=>{
    try {
      await axios.post('/api/vi/auth/logout')
      localStorage.removeItem("authToken")
      toast.success('logout successfully');
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <Box width={'100%'} p={'1rem 6%'} textAlign={'center'} sx={{boxShadow:3, mb:2, bgcolor:'purple', color:'white'}}>
   <Typography variant='h1' color={'white'}>
    AI GPT3 Clone
   </Typography>
   {
    loggedIn ? (
      <>
          <NavLink to="/" p={1}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </>
   
    ):(
      <>
    <NavLink to='/register'>Sign Up</NavLink>
           <NavLink to='/login'>Sign In</NavLink>
           </>
    )
   }
   
   </Box>
  );
};

export default Navbar