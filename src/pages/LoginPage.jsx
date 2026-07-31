import React, { useContext, useEffect, useState } from 'react';
import Login from '../features/auth/Login';
import axios from 'axios';
import { data, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
 const [error ,setError] = useState({})
 const [formData , setFormData] = useState({
  email:'',
  password:''
 })
const {setIsLoggedin , users ,setUsers , fetchData } = useContext(UserContext)

 const navigate = useNavigate()

useEffect(()=>{
  fetchData()
}, [])
 
const validateUser = () => {
  const errors = {};

  // Email Validation
  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  // Password Validation
  if (!formData.password.trim()) {
    errors.password = "Password is required.";
  }

  // Stop here if required fields are invalid
  if (Object.keys(errors).length > 0) {
    setError(errors);
    return false;
  }

  // Find user
  const user = users.find(
    (u) => u.email.toLowerCase() === formData.email.toLowerCase()
  );

  if (!user) {
    errors.email = "No account found with this email.";
  } else if (user.password !== formData.password) {
    errors.password = "Incorrect password.";
  }

  setError(errors);

  return Object.keys(errors).length === 0;
};

const handleChange =(e)=>{
    const {name , value } = e.target
    setFormData({...formData , [name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(validateUser()){
        localStorage.setItem("is_loggedin" ,  "true")
        setIsLoggedin(true)
        alert('Loggin succussfull!')
        navigate('/')
    }
}



  return (
    <div>
      <Login
      formData={formData}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      
      />
    </div>
  );
}

export default LoginPage;
