import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonBackButton } from '@ionic/react';
import {useRouteMatch} from 'react-router-dom'

import BottomTabBar from '../../../components/bottom-tab-bar';

import '../assets/scss/AccountSetting.scss';

const settings = [
  {
    'title': 'Change Password',
    'url': 'password'
  }
];


const Security: React.FC<{history}> = (props) => {
  let { path, url } = useRouteMatch();
  const settingList = settings.map((item, i) => {
    return (
      <IonItem button onClick={(e) => {e.preventDefault(); props.history.push(`${path}/${item.url}`)}} lines="none"  className="ion-react-nav-detail-btn" key={i}>
        <label className="align-self-center label-padding-left">{item.title}</label>
      </IonItem>
    );
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={(e) => {props.history.goBack()}}>
            <IonBackButton text="" className="disabled-button"/>
          </IonButtons>
          <IonTitle>Security</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
          {settingList}
        </IonList>
      </IonContent>
      <BottomTabBar history={props.history} tab="search"/>
    </IonPage>
  );
};


export default Security;