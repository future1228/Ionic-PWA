import React from 'react';
import { IonPage, IonButton, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonContent } from '@ionic/react';

import useWebShare from "react-use-web-share";

import './assets/css/DiscoverVote.scss'



const Discover: React.FC<{history}> = (props) => {
  const { share } = useWebShare();

  function shareClick() {
    share({
      title: 'Parrot Tour',
      text:'Some text for Parrot Tour',
      url: 'Link to URL'
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={() => {props.history.goBack()}}>
            <i className="fal fa-paper-plane custom-icon-size-small"></i>
          </IonButtons>
          <IonButtons slot="end" onClick={() => { shareClick()}}>
            <i className="fal fa-share-alt custom-icon-size-small"></i>
          </IonButtons>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="landing-container text-align-center">
          <div className="margin-top-30">
            <span className="circle-icon huge-icon">
              <i className="fal fa-book-spells"></i>
            </span>
          </div>
          <div className="margin-top-30">
            <IonLabel className="large-title">
              Sorry!
            </IonLabel>
          </div>
          <div className="margin-top-30">
            <IonLabel className="disabled-button">
              We are out of experiences for the moment but we'll come back soon with new ideas
            </IonLabel>
          </div>
          <IonButton expand="block" className="margin-top-20 red-button">Suggest New Experience</IonButton>
        </div>
      </IonContent>
     </IonPage>
  );
};

export default Discover;
