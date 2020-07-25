import React, { useState, Fragment } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonLabel } from '@ionic/react';

const EventActivate: React.FC<{ history:any; }> = (props) => { 

  const [state, setState] = useState({
    validationCode: '',
    partnerPincode: ''
  });

  const [step, setStep] = useState({
    current: 0,
    validate: true,
  })
  
  const handleValidationCodeSubmit = (e) => {
    e.preventDefault();
    if(state.validationCode == "12345"){
      console.log(e.target.value)
      setStep({...step, validate: true, current: 1})
    } else {
      setStep({...step, validate: false})
    }
  };     

  const handleValidationCodeChange = (e) => {
    setState({...state, validationCode: e.target.value})
  };

  const handlePartnerPinChange = (e) => {
    setState({...state, partnerPincode: e.target.value})
  }

  const handleActivateEvent = (e) => {
    props.history.push('conformed')
  }
  return (
    <IonPage>
      {step.current == 0 ?
        <CheckIn Success={step.validate} history={props.history} ValidationCode={state.validationCode} handleValidationCodeChange={handleValidationCodeChange} handleValidationCodeSubmit={handleValidationCodeSubmit} />
        :
        <Valid history={props.history} ValidationCode={state.validationCode} PartnerPincode={state.partnerPincode} handlePartnerPinChange={handlePartnerPinChange} handleActivateEvent={handleActivateEvent} />
      }
    </IonPage>
  );
};

interface CheckInProps {
  history: any,
  Success: boolean,
  ValidationCode: string,
  handleValidationCodeChange: any,
  handleValidationCodeSubmit: any,
}

const calendarIcon = () => {
  return (
    <span className="circle-icon huge-icon"><i className='fal fa-calendar-day'></i></span>
  );
}

const inValidIcon = () => {
  return (
    <span className="circle-icon huge-icon"><i className="fal fa-times"></i></span>
  )
}

const CheckIn : React.FC<CheckInProps> = (props) => {

  return (
    <Fragment>
      <div className="header_brand_image justify-content-center">
        <img alt="" src="./assets/imgs/brand_black.png"></img>
      </div>
      <IonContent>
        <div className="landing-container text-align-center">
          {props.Success ?
            null
            : 
            <IonLabel className="text-details fade-in">
              Code: {props.ValidationCode}
            </IonLabel>
          }
          <div className="password-forgotten-huge-icon">
            {props.Success ? calendarIcon(): null}
            {props.Success! ? null: inValidIcon()}
          </div>
          <div>
            <IonLabel className="title fade-in">
              {props.Success ?
                'Check-In'
                : 
                'InValid'
              }
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <IonLabel className="text-details">
              {props.Success ? 
                'Enter the code for your event to verify it.'
                :
                <div className="fade-in">The code you entered is incorrect. Please, try again.</div>
              }
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <div className="bordered-text-input margin-top-10 text-align-left text-box">
              <IonInput value={props.ValidationCode} onIonChange={props.handleValidationCodeChange} placeholder = "Event Code" />
            </div>
          </div>
          <div className="truble-login-margin">
            <IonButton onClick={props.handleValidationCodeSubmit} expand="block" className="margin-top-20 red-button text-transform-none">Validation</IonButton>
          </div>
          <div className="truble-login-margin">
            <p className="btn-separator truble-login-margin"><span>OR</span></p>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={(e)=> {}}><span className="title-sub text-transform-none">Scan QR-Code</span></IonButton>
          </div>
        </div>
      </IonContent>
    </Fragment>
  );
}




interface ValidProps {
  history: any,
  ValidationCode: string,
  PartnerPincode: string,
  handlePartnerPinChange: any,
  handleActivateEvent: any,
}

const Valid : React.FC<ValidProps> = (props) => {
  return (
    <Fragment>
      <div className="header_brand_image justify-content-center">
        <img alt="" src="./assets/imgs/brand_black.png"></img>
      </div>
      <IonContent>
        <div className="landing-container text-align-center">
          <div className="fade-in">
            <IonLabel className="title">
              Wakeboard – Tageskarte - Jugendlich
            </IonLabel>
          </div>
          <div className="fade-in">
            <IonLabel className="text-details">
              Wert: € 36, -
            </IonLabel>
          </div>
          <div className="fade-in">
            <IonLabel className="text-details">
              Preisgarantie bis 05.06.2021
            </IonLabel>
          </div>
          <div>
            <IonLabel className="text-details">
              Code: {props.ValidationCode}
            </IonLabel>
          </div>
          <div className="password-forgotten-huge-icon">
            <span className="circle-icon huge-icon">
              <i className="far fa-check"></i>
            </span>
          </div>
          <div>
            <IonLabel className="title fade-in">
              Valid
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <IonLabel className="text-details fade-in">
              Great! Your experience can start by the confirmation of the partner.
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <div className="bordered-text-input margin-top-10 text-align-left text-box">
              <IonInput value={props.PartnerPincode} onIonChange={props.handlePartnerPinChange} placeholder = "Partner Pincode" />
            </div>
          </div>
          <div className="truble-login-margin">
            <IonButton onClick={props.handleActivateEvent} expand="block" className="margin-top-20 red-button text-transform-none">Activate Event</IonButton>
          </div>
          <div className="truble-login-margin">
            <p className="btn-separator truble-login-margin"><span>OR</span></p>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={(e)=> {}}><span className="title-sub text-transform-none">Back to Activation</span></IonButton>
          </div>
        </div>
      </IonContent>
    </Fragment>
  );
}

export default EventActivate;