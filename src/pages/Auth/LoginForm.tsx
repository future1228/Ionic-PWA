import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { IonPage, IonInput, IonButton, IonTabBar,  IonAlert, IonTabButton, IonLabel, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom'

import './assets/scss/auth.scss';

const LoginForm: React.FC<{ history:any; }> = (props) => { 
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content:''
  });
  
  let history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault();
    const oktaAuth = new OktaAuth({ issuer: process.env.REACT_APP_ISSUER });
    oktaAuth.signIn({options: {warnBeforePasswordExpired: true, multiOptionalFactorEnroll: false}, username, password })
    .then(res => {
      const sessionToken = res.sessionToken;
      setSessionToken(sessionToken);
      // sessionToken is a one-use token, so make sure this is only called once
      authService.redirect({ sessionToken });
      props.history.push('/mycontacts')
    })
    .catch((err) => {
      if(!err.errorCode){
        setAlert({state: true, header: 'server is not working', content: 'try again later'})
      } else if (err.errorCode === "E0000004"){
        setAlert({state: true, header: 'Authentication failed', content: 'Username and Password was wrong'})
      } else if (err.errorCode === "E0000001"){
        setAlert({state: true, header: 'Authentication failed', content: 'type the validate username and password'})
      }
    });
  };     

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const gotoSignUp = () => {
    history.push('/register')
  }

  const gotoForgottenPassword = () => {
    history.push('/password_forgotten')
  }

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <IonPage>
      <div>
        <div className="header_brand_image justify-content-center">
          <img alt="" src="./assets/imgs/brand_black.png"></img>
        </div>
      </div>
      <IonContent>
        <div className="landing-container margin-top-20">
          <div className="bordered-text-input margin-top-20 text-align-left text-box">
            <IonInput value={username} onIonChange={handleUsernameChange} placeholder = "Username or email" />
          </div>
          <div className="bordered-text-input margin-top-20 text-align-left text-box">
            <IonInput value={password} type="password" onIonChange={handlePasswordChange} placeholder = "Password" />
          </div>
          <IonButton onClick={handleSubmit} expand="block" className="margin-top-20 signin-button red-button text-transform-none">Sign In</IonButton>
          <IonAlert
            isOpen={alert.state}
            onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
            cssClass='my-custom-class'
            header={alert.header}
            message={alert.content}
            buttons={['OK']}
          />
          <p className="btn-separator"><span>OR</span></p>
          <IonButton onClick={handleSubmit} expand="block" fill="clear" className="margin-top-20 signin-with-facebook text-transform-none">
            <span className="account-setting-icon-font-size" style={{marginRight: '10px'}}>
              <i className="fab fa-facebook-square"></i>
            </span>
            Sign in with Facebook
          </IonButton>
          <div className="text-align-center">
            <IonButton fill="clear" size="small" onClick={gotoForgottenPassword} className="text text-transform-none">Forget password?</IonButton>
          </div>
          <div className="align-item-center justify-content-center padding-top-50">
            <IonLabel className="text">Don't have an account? </IonLabel>
            <IonButton fill="clear" color="primary" size="small" onClick={gotoSignUp} className="link-main text-transform-none">Sign Up</IonButton>
          </div>
        </div>
      </IonContent>
      <IonTabBar slot="bottom" className="bottom-tab-bar-background-color bottom-icon-height">
        <IonTabButton tab="about" onClick={() => {props.history.push('./discovervote')}}>
          ABOUT
        </IonTabButton>

        <IonTabButton tab="help">
          HELP
        </IonTabButton>
        <IonTabButton tab="privacy">
          PRIVACY
        </IonTabButton>

        <IonTabButton tab="terms">
          TERMS
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default LoginForm;