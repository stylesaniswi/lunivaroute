import {useState} from 'react'

const useToken=()=> {

    
const getToken =() =>{
    const user = JSON.parse(sessionStorage.getItem("token"));
    return user

  }

  
  const [token , setToken] = useState(getToken());

  const saveToken =(values) =>{
    sessionStorage.setItem("token",JSON.stringify(values));
    setToken(values);

  }
  return{
    setToken:saveToken,
    token
}
  

}

export default useToken