import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonList, IonItem, IonBackButton, IonInput } from '@ionic/react';

import BottomTabBar from '../../../components/bottom-tab-bar';

import '../assets/scss/AccountSetting.scss';

const Password: React.FC<{history}> = (props) => {
  const  [state, setState] = useState({
    PauseAll: true,
    Matches: true,
    Invitations: true,
    Gifts: true,
    Events: true
  })

  const onChangeCheck = (e, field) => {
    setState({...state, [field]: !state[field]})
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header text-align-center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" text="" className="disabled-button"/>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => {}} strong={true}className="done-button">Save</IonButton>
          </IonButtons>
          <IonTitle>Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList >
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'old_password')} placeholder="Current Password"/>
          </IonItem>
  
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'old_password')} placeholder="New Password"/>
          </IonItem>
  
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'old_password')} placeholder="New Password again"/>
          </IonItem>
        </IonList>
      </IonContent>
      <BottomTabBar history={props.history} tab=""/>
    </IonPage>
  );
};

export default Password