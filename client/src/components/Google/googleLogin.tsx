import { GoogleLogin } from 'react-google-login';
import { refreshToken } from '../../utils/refreshToken';
import axios, { AxiosResponse } from 'axios';

export default function GoogleLoginComp() {
    const responseSuccess = async (response: any) => {
        console.log('Login Successful', response.profileObj);
        refreshToken(response);

        const res: AxiosResponse = (await axios
            .post(
                'http://localhost:8080/auth/login/',
                { key: 'value' },
                { headers: { Authorization: `Bearer ${response.tokenId}` } }
            )
            .catch((err) => console.error(err))) as AxiosResponse;

        localStorage.setItem('userName', res.data.name);
        localStorage.setItem('userEmail', res.data.email);
        localStorage.setItem('userProfile', res.data.profilePicture);
        window.location.href = '/';
    };

    const responseFailure = (response: any) => {
        console.log('Login Failed', response);
    };
    const googleClientId: string = `818841348357-1chcsfpshjf8s99vqkpu4ckdvn9esqen.apps.googleusercontent.com`;
    return (
        <div>
            <GoogleLogin
                clientId={googleClientId}
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="signin"
                    >
                        Sign In
                    </button>
                )}
                onSuccess={responseSuccess}
                onFailure={responseFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}
