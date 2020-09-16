/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import firebaseConfig from '../../../firebase/firebaseIndex';
import Signin from '../../../components/SignIn';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render () {
    return (
    <PageDefault>
      <Signin></Signin>
    </PageDefault>
    )
};
}
