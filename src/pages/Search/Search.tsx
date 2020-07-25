import React, { useState } from 'react';
import { IonPage, IonContent, IonSearchbar, IonButton, IonRow, IonCol, IonLabel } from '@ionic/react';

import BottomTabBar from '../../components/bottom-tab-bar';

import './assets/scss/search.scss';


const contacts = [
  {
    img: './assets/imgs/slides/slide2.jpg',
  },
  {
    img: './assets/imgs/slides/slide3.jpg',
  },
  {
    img: './assets/imgs/slides/slide4.jpg',
  },
  {
    img: './assets/imgs/slides/slide5.jpg',
  },
  {
    img: './assets/imgs/slides/slide6.jpg',
  },
  {
    img: './assets/imgs/slides/slide7.jpg',
  },
  {
    img: './assets/imgs/slides/slide8.jpeg',
  },
  {
    img: './assets/imgs/slides/slide9.jpeg',
  },
  {
    img: './assets/imgs/slides/slide10.jpeg',
  },
];

const Search: React.FC<{history}> = (props) => {

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol size="4" className="search-overview-img" key={index}>
        <img className="img-auto" src={item.img} alt=""/>
      </IonCol>
    );
  });

  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
        </IonRow>
        <div className="text-align-center text-details margin-top-50">
          <IonLabel>Experience not found?</IonLabel>
        </div>
        <div className="search-button-padding">
          <IonButton expand="block" className="red-button text-transform-none">Suggest New Experience</IonButton>
        </div>
      </IonContent>
      
      <BottomTabBar history={props.history} tab="search"/>
    </IonPage>
  );
};

export default Search;
