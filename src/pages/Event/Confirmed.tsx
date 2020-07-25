import React, { useState, Fragment } from 'react';
import { IonPage, IonContent, IonButton, IonLabel } from '@ionic/react';

const Confirmed : React.FC<{history: any}> = (props) => {
  return (
    <IonPage>
      <div className="header_brand_image justify-content-center">
        <img alt="" src="./assets/imgs/brand_black.png"></img>
      </div>
      <IonContent>
        <div className="landing-container text-align-center">
          <div className="password-forgotten-huge-icon">
            <span className="circle-icon huge-icon">
              <i className="far fa-check"></i>
            </span>
          </div>
          <div>
            <IonLabel className="title">
              Confirmed
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <IonLabel className="text-details">
              Enjoy your experience with your partner.
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <p className="btn-separator truble-login-margin"><span>OR</span></p>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={(e)=> {}}><span className="title-sub text-transform-none">Back to Activation</span></IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Confirmed