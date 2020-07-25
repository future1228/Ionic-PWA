import React from 'react';
import { IonPage } from '@ionic/react';
import Carousel from 're-carousel'
import { useTranslation } from 'react-i18next';
import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';

import IndicatorDots from './indicatorDots'
import './assets/scss/GetStart.scss'


const GetStart: React.FC = () => {
  const { t } = useTranslation();
  const { authState } = useOktaAuth();
  
  return (
    authState.isAuthenticated ? <Redirect to={{ pathname: '/mycontacts' }}/> :
    <IonPage>
      <Carousel loop={true} axis="x" auto={true} interval={3000} duration={500} widgets={[IndicatorDots]}>
        <div className="background-image-full-screen" style={{ height: '100%', backgroundImage: `url('./assets/imgs/slides/slide14.jpeg')`}}>
          <div className="slider-discription">
            <h4 className="get-start-title">{t('title.1')}</h4>
            <h4 className="subtitle-color subtitle">{t('sub_title.1')}</h4>
          </div>
        </div>
        <div className="background-image-full-screen" style={{ height: '100%', backgroundImage: `url('./assets/imgs/slides/slide12.jpeg')`}}>
          <div className="slider-discription">
            <h4 className="get-start-title">{t('title.2')}</h4>
            <h4 className="subtitle-color subtitle">{t('sub_title.2')}</h4>
          </div>
        </div>
        <div className="background-image-full-screen" style={{ height: '100%', backgroundImage: `url('./assets/imgs/slides/slide9.jpeg')`}}>
          <div className="slider-discription">
            <h4 className="get-start-title">{t('title.3')}</h4>
            <h4 className="subtitle-color subtitle">{t('sub_title.3')}</h4>
          </div>
        </div>
      </Carousel>
    </IonPage>
  );
};

export default GetStart;
