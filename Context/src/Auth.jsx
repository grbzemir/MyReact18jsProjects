import React from 'react';
import { useContext } from 'react';
import AuthContext from './Context/auth-context';


function Auth() {
    const { status, login } = useContext(AuthContext);
    // const auth = useContext(AuthContext);
    // console.log(auth.status);
    console.log(status);
    return (
        <div>
            <h1>Giriş yaptin mi?</h1>
            {status ? <p>Evet , Çoktan</p> : <p>Hayır</p>}
            <button onClick={login}>Giris Yap</button>
        </div>

    )
}

export default Auth;