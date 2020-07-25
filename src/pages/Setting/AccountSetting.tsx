import React from 'react';
import { useRouteMatch} from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonList, IonItem, IonBackButton } from '@ionic/react';
import BottomTabBar from '../../components/bottom-tab-bar';
// import Notifications from './Notifications/Notifications'
// import Security from './Security/Security'

import './assets/scss/AccountSetting.scss';


const settings = [
  {
    'title': 'Notifications',
    'icon': 'fal fa-bell',
    'url': '/notifications'
  },
  {
    'title': 'Security',
    'icon': 'fal fa-shield-check',
    'url': '/security'

  },
  {
    'title': 'Account',
    'icon': 'fal fa-user-circle',
    'url': '/account'
  },
  {
    'title': 'Help',
    'icon': 'fal fa-question-circle',
    'url': '/help'
  },
  {
    'title': 'About',
    'icon': 'fal fa-info-circle',
    'url': '/about'
  },
];



const SettingIndex: React.FC<{history}> = (props) => {
  let { path } = useRouteMatch();
  
  const settingList = settings.map((item, i) => {
    return (
      <IonItem button onClick={(e) => {props.history.push(path + item.url)}} lines="none"  className="ion-react-nav-detail-btn" key={i}>
        <div className="justify-content-center align-item-center">
          <span className="account-setting-icon-font-size">
            <i className={item.icon}></i>
          </span>
        </div>
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
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList >
          {settingList}
        </IonList>
        <hr className="seperator-hr"/>
        <IonButton fill="clear" onClick={(e) => {props.history.goBack()}} className="link-main text-transform-none">Sign Out</IonButton>
        <div className="account-setting-version text">
          <IonLabel>Version 1.0</IonLabel>
        </div>
      </IonContent>
      <BottomTabBar history={props.history} tab=""/>
    </IonPage>
  );
};

export default SettingIndex;