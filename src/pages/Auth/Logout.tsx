
import React from 'react';
import LoginForm from './LoginForm';
import { useOktaAuth } from '@okta/okta-react';

const Login: React.FC<{ issuer }> = (props) => { 
  const { authState, authService } = useOktaAuth();

  return authState.isAuthenticated ?
    authService.logout('/') :
    <LoginForm history={props}/>;
};

export default Login;