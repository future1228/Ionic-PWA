import React, { useState } from 'react';
import { IonPage, IonInput, IonButton, IonRow,  IonDatetime, IonTabButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCol, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';

import './assets/scss/events.scss';

const BookNow: React.FC<{ history:any; }> = (props) => { 
  const [state, setState] = useState({
    date: '2020-07-24',
    participants: 1,
    message: ''
  })
  const handleDateChange = (e) => {
    setState({...state, date: e.target.value})
  };

  const handleParticipantsChange = (e) => {
    setState({...state, participants: e.target.value})
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonButton onClick={(e) => {props.history.goBack()}} className="cancel-button">Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => {props.history.push('event_detail')}} strong={true} className="done-button">Done</IonButton>
          </IonButtons>
          <IonTitle>Book</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="landing-container margin-top-20">
          <div className="text-align-left margin-top-10">
            <div className="title">Parrat Tour</div>
            <IonLabel>Supplier 1</IonLabel>
          </div>
          <IonRow className="margin-top-20">
            <IonCol size="4" className="align-item-center">
              <IonLabel>Date*</IonLabel>
            </IonCol>
            <IonCol size="8">
              <div className="bordered-text-input text-align-left text-box">
                {/* <IonInput value={state.date} onIonChange={handleUsernameChange} placeholder = "Username or email" /> */}
                <IonDatetime displayFormat="DD. MM. YYYY" value={state.date} placeholder="Select Date" onIonChange={handleDateChange}></IonDatetime>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4" className="align-item-center">
              <IonLabel>Participants</IonLabel>
            </IonCol>
            <IonCol size="8">
              <div className="bordered-text-input text-align-left text-box">
                <IonSelect value={state.participants} interface="popover" onIonChange={handleParticipantsChange}>
                  <IonSelectOption value={1}>&nbsp;1</IonSelectOption>
                  <IonSelectOption value={2}>&nbsp;2</IonSelectOption>
                  <IonSelectOption value={3}>&nbsp;3</IonSelectOption>
                  <IonSelectOption value={4}>&nbsp;4</IonSelectOption>
                  <IonSelectOption value={5}>&nbsp;5</IonSelectOption>
                  <IonSelectOption value={6}>&nbsp;6</IonSelectOption>
                  <IonSelectOption value={7}>&nbsp;7</IonSelectOption>
                </IonSelect>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="8">
              <IonLabel>Message to Partner</IonLabel>
            </IonCol>
            <IonCol size="12">
            <div className="bordered-text-input text-align-left text-box">
              <IonTextarea rows={8} value={state.message} placeholder="Enter more information here."></IonTextarea>
            </div>
            </IonCol>
          </IonRow>
          <div className="justify-content-center">
            <IonButton className="red-button width-50">Request Event</IonButton>
          </div>
          
          <p className="btn-separator"><span>OR</span></p>
          <div className="text-align-center">
            <IonButton fill="clear" color="secondary" size="small" onClick={() => {}}><IonLabel className="title-sub" color="primary">Contact Partner Directly</IonLabel></IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BookNow;