import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

const UserProvider=({children})=>{

    const [users , setUsers ] = useState([])
    const [is_loggedin , setIsLoggedin]  = useState(JSON.parse(localStorage.getItem("is_loggedin") || false))
   

useEffect(()=>{
  fetchData()
}, [])

const fetchData=async()=>{
  const response = await axios.get("https://users-json-7n71.onrender.com/users")
  const data =await response.data
  setUsers(data)

}


    return (
        <>   
    <UserContext.Provider value={{
            is_loggedin , 
            setIsLoggedin ,
            users ,
            setUsers ,
            fetchData
    }}  >
         {children}
    </UserContext.Provider>    
        </>
    )

}

export default UserProvider;


