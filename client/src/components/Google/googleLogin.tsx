import { GoogleLogin } from "react-google-login"
import React from "react";
import { refreshToken } from "../../utils/refreshToken"

export default function GoogleLoginComp() {
    
  const responseSuccess = (response:any) =>{
       console.log('Login Successful', response.profileObj);
       refreshToken(response)
  }

  const responseFailure = (response:any) =>{
    console.log('Login Failed', response);
  }
  const googleClientId : string =`818841348357-1chcsfpshjf8s99vqkpu4ckdvn9esqen.apps.googleusercontent.com`;
    return (
    <div>
      <GoogleLogin
        clientId ={googleClientId}
        buttonText="Login With Google"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="google-login"
      />
    </div>
  );
}
