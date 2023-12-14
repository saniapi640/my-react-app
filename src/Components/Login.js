import React, {useRef, useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthProvider';
import ErpAxios from '../api/ErpAxios';
const LOGIN_URL = '/login';

function Login(){
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errorRef = useRef();
    
    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, []
    )
    useEffect(() => {
        setErrorMsg('');
    }, [email,password]
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ErpAxios.post(LOGIN_URL,
                        JSON.stringify({email, password}),
                        {
                            headers: { 'Content-Type': 'application/json' },
                            withCredentials: true
                        }
                    );
                    console.log(JSON.stringify(response?.data));
                    //console.log(JSON.stringify(response));
                    const accessTocken = response?.data?.accessTocken;
                    //const roles = response?.data?.roles;
                    setAuth({
                        email, password,accessTocken
                    });

            setUser('');
            setPwd('');
            setSuccess(true);
        }catch (error){
            if(!error?.response){
                setErrorMsg('No Server Reponse');
            }else if(error.response?.status === 400){
                setErrorMsg('Missing Username or Password');
            }else if(error.response?.status === 401){
                setErrorMsg('Unauthorized');
            }else {
                setErrorMsg('Login Failed');
            }
            errorRef.current.focus();
        }
       
    }
    return (
       <>
        {success ? ( 
<section>
<p>login success </p>
</section>

        ) :(
            <section>
            <p ref={errorRef} className={errorMsg? "erromsg" : "offscreen"}
            area-aria-live= "assertive">{errorMsg}</p>
 <form onSubmit={handleSubmit}>
      <label htmlFor='username'>
        <p>Username</p>
        <input 
            type="text"
            id="username"
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            value={email}
            required
        />
      </label>
      <label htmlFor='password'>
        <p>Password</p>
        <input 
            type="text"
            id="password"
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
        />
      </label>
      <div>
        <button 
            type="submit"

        >Sign In</button>
      </div>
    </form>
        </section>
        )}
        </>
    )
}

export default Login