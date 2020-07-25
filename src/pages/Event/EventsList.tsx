import React from 'react'
import {IonPage, IonList, IonBadge, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButtons, IonBackButton, IonAvatar } from '@ionic/react'

import BottomTabBar from '../../components/bottom-tab-bar';

const events = [
  {
    img: './assets/imgs/event_image1.png',
    name: 'Parrot Tour',
    status: 1
  },
  {
    img: './assets/imgs/event_image1.png',
    name: 'Parrot Show',
    status: 2
  },
  {
    img: './assets/imgs/event_image1.png',
    name: 'Parrot Feeting',
    status: 3
  },
  {
    img: './assets/imgs/event_image1.png',
    name: 'Parrot Feeting',
    status: 4
  },
  {
    img: './assets/imgs/event_image1.png',
    name: 'Parrot Feeting',
    status: 5
  },
  {
    img: './assets/imgs/event_image1.png',
    name: 'Jena karrasco',
    status: 2
  },
];

const badge = (status) => {
  switch (status){
    case 1:
      return <IonBadge color="medium" style={{fontSize: '12px', width: '90px'}}>not booked</IonBadge>
    case 2:
      return <IonBadge color="warning" style={{fontSize: '12px', width: '90px'}}>pending</IonBadge>
    case 3:
      return <IonBadge color="success" style={{fontSize: '12px', width: '90px'}}>conformed</IonBadge>
    case 4:
      return <IonBadge style={{backgroundColor: '#cc33cc', fontSize: '12px', width: '90px'}}>proposed</IonBadge>
    case 5:
      return <IonBadge color="danger" style={{fontSize: '12px', width: '90px'}}>declined</IonBadge>
  }
}

const Experiences: React.FC<{history}> = (props) => {

  const eventList = events.map((item, i) => {
    return (
      <IonItem button onClick={(e) => {props.history.push('/event_detail', item)}} lines="none"  className="ion-grey-light-background margin-top-10" key={i}>
        <div className="avatar-border padding-right-10">
          <IonAvatar className="avatar-img">
            <img src={item.img} alt="" className="circle-border"/>
          </IonAvatar>
        </div>
        <div className="align-items-center">
          <div className="title">{item.name}</div>
          {badge(item.status)}
        </div>
      </IonItem>
    );
  })

   return(
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={(e) => {props.history.goBack()}}>
            <IonBackButton text="" className="disabled-button"/>
          </IonButtons>
          <IonTitle className="text-align-center">Avaliable</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="page-container">
          <br />
          <IonList>
            {eventList}
          </IonList>
          <br />
          
        </div>
      </IonContent>
      <BottomTabBar history={props.history} tab="experience"/>
    </IonPage>
  );
}

export default Experiences