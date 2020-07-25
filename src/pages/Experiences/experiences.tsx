import React from 'react'
import {IonPage, IonList, IonItem, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'

import BottomTabBar from '../../components/bottom-tab-bar';
import './assets/scss/Experiences.scss';

const Personal_Matches = [
  {
    icon: 'fal fa-book-heart',
    title: 'Available',
    text: 'experiences are waiting for you',
    url: 'events_list'
  },
  {
    icon: 'fal fa-shopping-cart',
    title: 'Bought',
    text: '3 experiences you can gift to your favorites'
  },
  {
    icon: 'fal fa-chart-line',
    title: 'Statistic',
    text: 'Badge Level: hero You completed 16 experiences'
  },
  {
    icon: 'fal fa-wallet',
    title: 'Wallet',
    text: '€ 23,- are available for your next experience'
  }
];

const Experiences: React.FC<{history}> = (props) => {

  const PersonalList = Personal_Matches.map((item, index) => {
    return (
      <IonItem key={index} button onClick={(e) => {props.history.push(item.url)}} className="ion-grey-light-background margin-top-10"  lines="none">
        <IonCol size="3">
          <div>
            <span className="circle-icon large-icon">
              <i className={item.icon} ></i>
            </span>
          </div>
        </IonCol>
        <IonCol size="9" className="align-items-center">
          <div className="title">{item.title}</div>
          <div className="text">{item.text}</div>
        </IonCol>
      </IonItem>
    );
  })

   return(
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonTitle className="text-align-center">Experiences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="page-container">
          <br />
          <div className="justify-content-center">
            <IonButton className="red-button text-transform-none">Add Gifted Experience</IonButton>
          </div>
          <br />
          <IonList>
            {PersonalList}
          </IonList>
          <br />
          
        </div>
      </IonContent>
      <BottomTabBar history={props.history} tab="experience"/>
    </IonPage>
  );
}

export default Experiences