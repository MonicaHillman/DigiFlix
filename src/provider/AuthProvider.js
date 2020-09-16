import React, {useState, useEffect} from 'react';
import {authMethods} from '../firebase/authmethods'

export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {
  const initState = {email: '', password: ''}
  const [inputs, setInputs] = useState(initState)
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  const handleSignin = () => {
    //changed to handleSingin
    console.log('handleSignin!!!!')
    // made signup signin
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
    console.log(errors, token)
  }

  return (
    
    <firebaseAuth.Provider
    value={{
      //replaced test with handleSignup
      handleSignin,
      token,
      inputs,
      setInputs,
      errors,
    }}>
      {props.children}
      
    </firebaseAuth.Provider>
    
  );  
};

export default AuthProvider;