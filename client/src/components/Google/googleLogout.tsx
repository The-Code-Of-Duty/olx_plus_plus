import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login'
import { Snackbar } from '@mui/material';

export default function googleLogout() {
   const [open, setOpen] = useState(false);
    const responseSuccess = () =>{
      setOpen(true);
   }
  
    return (
    <div>
        <GoogleLogout 
          clientId="818841348357-1chcsfpshjf8s99vqkpu4ckdvn9esqen.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={responseSuccess}
        />
        {/* <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={()=> setOpen(false)}
            message="Logout Successfully"
        /> */}
    </div>
  )
}
