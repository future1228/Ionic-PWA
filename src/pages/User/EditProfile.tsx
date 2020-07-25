import React, { useState } from 'react';
import { IonDatetime, IonSelect, IonSelectOption, IonLabel, IonAvatar, IonInput, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons, IonItem } from '@ionic/react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ChoosePhoto from '../../components/change-photo';
import BottomTabBar from '../../components/bottom-tab-bar';

import './assets/css/EditProfile.scss'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack()
}

const gotoMyContacts = (e, props) => {
  e.preventDefault();
  props.history.push('/mycontacts');
}

const EditProfile: React.FC<{history}> = (props) => {

  const [state, setState] = useState({
    name: 'Edina',
    username: 'edina23',
    gender: 'female',
    birthday: Date(),
    city: 'Graz',
    status: 'Relationship',
    children: 2
  })

  const onChangeName = (e) => {
    setState({...state, name: e.target.value})
  }
  
  const onChangeUserName = (e) => {
    setState({...state, username: e.target.value})
  }

  const onChangeBirthday = (e) => {
    setState({...state, birthday: e})
  }

  const onChangeGender = (e) => {
    setState({...state, gender: e.target.value})
  }

  const onChangeCity = (e) => {
    setState({...state, city: e.target.value})
  }  
  
  const onChangeStatus = (e) => {
    setState({...state, status: e.target.value})
  }
  
  const onChangeChildren = (e) => {
    setState({...state, children: e.target.value})
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonButton onClick={(e) => gotoBack(e, props)} className="cancel-button">Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => gotoMyContacts(e, props)} strong={true} className="done-button">Done</IonButton>
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content">
        <IonRow>
          <IonCol size="2"></IonCol>
          <IonCol size="8" className="justify-content-center">
            <IonAvatar class="profile-img-cover">
              <img alt="" src="https://experiencecontent.blob.core.windows.net/user/901890a5-64c1-468d-a603-930c724e082a/profile.jpg" />
            </IonAvatar>
          </IonCol>
          <IonCol size="2"></IonCol>
        </IonRow>

        <ChoosePhoto title="Change profile photo" history={props.history}/>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Name*</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.name} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeName(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Username*</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.username} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeUserName(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>


        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Gender</IonLabel>
          </IonCol>
          <IonCol size="9" className="gender-padding-left">
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="male" control={<Radio color="primary" />} label="female" checked={state.gender === 'male'} onChange={(e) => {onChangeGender(e)}}/>
                <FormControlLabel value="female" control={<Radio color="primary" />} label="male" checked={state.gender === 'female'} onChange={(e) => {onChangeGender(e)}}/>
              </RadioGroup>
            </FormControl>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Birthday</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonDatetime value={state.birthday} onIonChange={(e) => {onChangeBirthday(e)}} placeholder="Select Date" className="ion-datetime-custom"></IonDatetime>
          </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>City</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.city} clearInput={true} className="" onIonChange={(e) => onChangeCity(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Status</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonSelect value={state.status} onIonChange={(e) => {onChangeStatus(e)}} interface="popover" className="ion-select-custom relation-ship-width">
                <IonSelectOption value="Single">Single</IonSelectOption>
                <IonSelectOption value="Married">Married</IonSelectOption>
                <IonSelectOption value="Divorced">Divorced</IonSelectOption>
                <IonSelectOption value="Relationship">Relationship</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Children</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonSelect value={state.children} onIonChange={(e) => {onChangeChildren(e)}} interface="popover" className="ion-select-custom">
                <IonSelectOption value={1}>1</IonSelectOption>
                <IonSelectOption value={2}>2</IonSelectOption>
                <IonSelectOption value={3}>3</IonSelectOption>
                <IonSelectOption value={4}>4</IonSelectOption>
                <IonSelectOption value={5}>5</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonContent>
      <BottomTabBar history={props.history} tab=""/>
    </IonPage>
  );
};

export default EditProfile;
