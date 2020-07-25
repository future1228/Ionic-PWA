import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonAlert, IonLabel } from '@ionic/react';

import './assets/scss/auth.scss';
import './assets/scss/passwordForgotten.scss';

const PasswordForgotten: React.FC<{ history:any; }> = (props) => { 
  const [email, setEmail] = useState();
  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content:''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };     

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const gotoSignIn = () => {
   props.history.push('/login')
  }

  const gotoSignUp = () => {
    props.history.push('/register')
  }

  return (
    <IonPage>
      <div className="header_brand_image justify-content-center">
        <img alt="" src="./assets/imgs/brand_black.png"></img>
      </div>
      <IonContent>
        <div className="landing-container text-align-center">
          <div className="password-forgotten-huge-icon">
            <span className="circle-icon huge-icon">
              <i className="fal fa-lock-alt"></i>
            </span>
          </div>
          <div>
            <IonLabel className="title">
              Trouble Login in?
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <IonLabel className="text-details">
              Enter your email and we'll send you a link to get back into your account.
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <div className="bordered-text-input margin-top-10 text-align-left text-box">
              <IonInput value={email} onIonChange={handleEmailChange} placeholder = "Email" />
            </div>
          </div>
          <div className="truble-login-margin">
            <IonButton onClick={handleSubmit} expand="block" className="margin-top-20 red-button text-transform-none">Send Sign In Link</IonButton>
          </div>
          <div className="truble-login-margin">
            <p className="btn-separator truble-login-margin"><span>OR</span></p>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={gotoSignUp}><span className="title-sub text-transform-none">Create New Account</span></IonButton>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={gotoSignIn}><span  className="title-sub text-transform-none">Back to Sign In</span></IonButton>
          </div>
          <IonAlert
            isOpen={alert.state}
            onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
            cssClass='my-custom-class'
            header={alert.header}
            message={alert.content}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PasswordForgotten;