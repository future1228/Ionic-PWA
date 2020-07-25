import React from 'react'
import PropTypes from 'prop-types'
import { IonButton, IonRow, IonCol } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './assets/scss/GetStart.scss';

function Dot (props) {
  return (
    <span style={{
      display: 'inline-block',
      height: '8px',
      width: '8px',
      borderRadius: '4px',
      backgroundColor: 'white',
      margin: '7px 5px',
      opacity: props.selected ? '1' : '0.3',
      transitionDuration: '300ms'
    }} />
  )
}

export default function IndicatorDots (props) {
  let history = useHistory();

  const gotoSetting = (e, props) => {
    history.push('/setting');
  }

  if (props.total < 2) {
    // Hide dots when there is only one dot.
    return <div style={{position: 'absolute',width: '100%',zIndex: 100,bottom: '0px',textAlign: 'center'}} />
  } else {
    return (
      <div>
        <div style={{position: 'absolute', width: '100%', zIndex: 100, top: '15px', textAlign: 'center'}} className="justify-content-space-between brand-title">
          <img alt="" src="./assets/imgs/brand_white.png" className="brand-image"/>
          <div onClick={(e) => gotoSetting(e, props)} slot="end" className="align-item-center">
            <i className="far fa-bars custom-icon-size-small white-icon"></i>
          </div>
        </div>
        <div style={{position: 'absolute', width: '100%', zIndex: 100, bottom: '15px', textAlign: 'center'}}>
          <IonRow className="justify-content-center">
            <IonCol>
              <IonButton expand="block" routerLink="/login" className="get-start-button">GETTING STARTING</IonButton>
              {
                Array.apply(null, Array(props.total)).map((x, i) => {
                  return <Dot key={i} selected={props.index === i} />
                })
              }
              <div className="font-15 footer-notice text-align-center">
                <p>We don't past anything to Facebook.</p>
                <p>By signingin, you agree to our Terms of Services and Privacy Policy</p>  
              </div>
            </IonCol>
          </IonRow>
        </div>
      </div>
    )
  }
}

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}