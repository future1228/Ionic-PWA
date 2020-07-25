import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonToast } from '@ionic/react';

import BottomTabBar from '../../components/bottom-tab-bar';

import './assets/scss/MyContacts.scss';

const gotoSetting = (e, props) => {
  e.preventDefault();
  props.history.push('/account_setting');
}

const gotoEditProfile = (e, props) => {
  e.preventDefault();
  props.history.push('/editprofile');
}

const gotoContactDetail = (e, props) => {
  props.history.push('/contactdetail');
}

const contacts = [
  {
    img: 'https://experiencecontent.blob.core.windows.net/user/2fb1c8e4-42a4-43a6-a337-b8cc52c83d3f/profile.jpg',
  },
  {
    img: './assets/imgs/profile1.jpg',
  },
];

const MyAccount: React.FC<{history}> = (props) => {

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => gotoContactDetail(e, props)} size="4" className="grid-img height-140" key={index}>
        <img className="img-auto card-effect object-fit-cover" src={item.img} alt=""/>
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen">
          <span className="pencil-icon ">
            <i className="fal fa-pencil-alt"></i>
          </span>
        </div>
      </IonCol>
    );
  });
  const initCard = (key) => {
    return(
      <IonCol size="4" className="grid-img height-140" key={key}>
        <div className="empty-img card-effect">
        </div>
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen full-fill-red-icon">
          <span className="white-icon">
            <i className="fal fa-plus"></i>
          </span>
        </div>
      </IonCol>
    )
  }

  const empty = () => {
    var tem = [] as any;
    for(var i = contacts.length; i < 9; i++){
      tem.push(initCard(i));
    }
    return tem
  }

  const accountActivated = (e) => {

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <div onClick={(e) => gotoSetting(e, props)} slot="start">
            <i className="fal fa-cog custom-icon-size-small" slot="start"></i>
          </div>
          <div onClick={(e) => gotoEditProfile(e, props)} slot="end">
            <i className="far fa-user custom-icon-size-small" slot="end" ></i>
          </div>
          <IonTitle>My Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
          {empty()}
        </IonRow>
        <IonToast
          isOpen={true}
          onDidDismiss={(e) => accountActivated(e)}
          message="Activated successfully."
          duration={2000}
          cssClass="bottom-toast-default"
        />
      </IonContent>
      <BottomTabBar history={props.history} tab="contact"/>
    </IonPage>
  );
};

export default MyAccount;
