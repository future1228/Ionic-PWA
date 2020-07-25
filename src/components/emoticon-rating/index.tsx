import React from 'react';
import { IonRow, IonCol, IonRippleEffect } from '@ionic/react';

import Images from './images'
import './assets/css/theme.scss'


const DiscoverVote: React.FC<{value: number; changeValue: (changedValue: number) => void;}> = (props) => {


  return (
    <IonRow className="test">
      <IonCol size="1"></IonCol>
      <IonCol size="2" onTouchStart = {() => {props.changeValue(0)}} className="animation-parent">
        <div className="ion-activatable ripple-parent">
          <img className="image-padding" src={props.value === 0 ? Images.hate.gif : Images.hate.inactive} alt=""/>
          <IonRippleEffect type="unbounded" className="effect"></IonRippleEffect>
        </div>
      </IonCol>
      <IonCol size="2" onTouchStart = {() => {props.changeValue(1)}}>
        <div className="ion-activatable ripple-parent">
          <img src={props.value === 1 ? Images.disappointed.gif : Images.disappointed.inactive} alt=""/>
          <IonRippleEffect type="unbounded" className="effect"></IonRippleEffect>
        </div>
      </IonCol>
      <IonCol size="2" onTouchStart = {() => {props.changeValue(2)}}>
        <div className="ion-activatable ripple-parent">
          <img src={props.value === 2 ? Images.natural.gif : Images.natural.inactive} alt=""/>
          <IonRippleEffect type="unbounded" className="effect"></IonRippleEffect>
        </div>
      </IonCol>
      <IonCol size="2" onTouchStart = {() => {props.changeValue(3)}}>
        <div className="ion-activatable ripple-parent">
          <img src={props.value === 3 ? Images.good.gif : Images.good.inactive} alt=""/>
          <IonRippleEffect type="unbounded" className="effect"></IonRippleEffect>
        </div>
      </IonCol>
      <IonCol size="2" onTouchStart = {() => {props.changeValue(4)}} >
        <div className="ion-activatable ripple-parent">
          <img src={props.value === 4 ? Images.excellent.gif : Images.excellent.inactive} alt=""/>
          <IonRippleEffect type="unbounded" className="effect"></IonRippleEffect>
        </div>
      </IonCol>
      <IonCol size="1"></IonCol>
    </IonRow>
  );
};

export default DiscoverVote;