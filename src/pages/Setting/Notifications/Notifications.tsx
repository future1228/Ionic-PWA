import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import { IonButtons, IonBackButton } from '@ionic/react';
import {useRouteMatch} from 'react-router-dom'

import BottomTabBar from '../../../components/bottom-tab-bar';

import '../assets/scss/AccountSetting.scss';


const Test: React.FC = () => {
  return (
    <h1>I am here</h1>
  );
};

const settings = [
  {
    'title': 'Email and SMS',
    'url': 'emailandsms'
  },
  {
    'title': 'Push Notifications',
    'content': 'test'
  },
  {
    'title': 'Social Media',
    'content': 'test'
  }
];


const Notifications: React.FC<{history}> = (props) => {

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
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList >
          {settingList}
        </IonList>
      </IonContent>
      <BottomTabBar history={props.history} tab=""/>
    </IonPage>
  );
};


export default Notifications;