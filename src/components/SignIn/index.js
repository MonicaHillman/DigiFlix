// add useContext
import React, {useContext, useState} from 'react';
import {firebaseAuth} from '../../provider/AuthProvider';
import PageDefault from '../PageDefault';
import Form from '../Form';
import Button from '../../components/Button';
import securityImg from '../../assets/img/securityImg.png';
import './index.css';


function Signin() {

  const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    handleSignin()
  }

  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))

  }

  return (
    <PageDefault>
    <h1>Entre na conta</h1>
    <form onSubmit={handleSubmit}>
      <Form label="Email" onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <Form label="Senha" onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <Button>Entrar</Button>
      {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
      </form>
    <div className="security">
    <img src={securityImg} alt=""/>
    </div>
    </PageDefault>
  )
};

export default Signin;