import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons } from '@ionic/react';
import { } from 'ionicons/icons';
import avatarIcons from './avatar-icons'

import './assets/css/SelectAvatar.scss'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack();
}

const gotoContactDetail = (e, props) => {
  e.preventDefault();
  props.history.push('/contactdetail');
}

const changeAvatar = (e, props) => {
  
}

const SelectAvartar: React.FC = (props) => {

  const  [selectedNo, setSelectedNo] = useState(-1);

  const contactList = avatarIcons.map((item, index) => {
    return(
      <IonCol onClick={(e) => changeAvatar(e, props)} size="3" className="padding-10" key={index}>
        <div className={selectedNo === index ? "selected-icon-background circle-image" : "bacground-color-grey circle-image"}>
          <img className={selectedNo === index ? "" : ""} src={item.img} onClick={() => {setSelectedNo(index)}} alt=""/>
        </div>
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonButton onClick={(e) => gotoBack(e, props)} className="cancel-button">Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => gotoContactDetail(e, props)} strong={true} className="done-button">Done</IonButton>
          </IonButtons>
          <IonTitle>Edit Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SelectAvartar;
