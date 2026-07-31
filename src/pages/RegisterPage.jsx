import React, { useContext, useEffect, useState } from 'react';
import Register from '../features/auth/Register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const RegisterPage = () => {
 
  const [formData , setFormData ] = useState({
    username :'',
    email : '',
    password:''
})
const [error , setError ] = useState({})
const {users , setUsers} = useContext(UserContext)
const navigate = useNavigate()

const handleChange = (e)=>{
       const {name , value }= e.target
       setFormData({...formData , [name]:value})
}

const validation = () => {
  const errors = {};
  const { username, email, password } = formData;

  // Username Validation
  if (!username.trim()) {
    errors.username = "Username is required.";
  } else if (username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters long.";
  } else if (!/^[A-Za-z0-9_ ]+$/.test(username)) {
    errors.username =
      "Username can only contain letters, numbers, spaces, and underscores.";
  }

  // Email Validation
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  } else {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (user) {
      errors.email = "An account with this email already exists.";
    }
  }

  // Password Validation
  if (!password.trim()) {
    errors.password = "Password is required.";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
  ) {
    errors.password =
      "Password must contain uppercase, lowercase, number, and special character.";
  }

  setError(errors);

  return Object.keys(errors).length === 0;
};


const handleSubmit = async(e)=>{
     e.preventDefault()     
     if(validation()){      
        await axios.post("https://users-json-7n71.onrender.com/users" , formData)
        alert('Register succussfull!')
        setFormData({
          username :'',
          email : '',
          password:''
      }) 
      navigate("/login")
     }
}

return (
    <div>
      <Register
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      />
    </div>
  );
}

export default RegisterPage;
