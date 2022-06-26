import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';



function Logout() {
    // const navitage = useNavigate();

    const handleLogout= ()=>{
        sessionStorage.removeItem('token');
        window.location.reload();
        
    }
  return (
    <>
    <div>
    <Button danger onClick={handleLogout}>Logout</Button>
        
    </div>
    </>
  )
}

export default Logout