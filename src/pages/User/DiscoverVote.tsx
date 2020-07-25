import React from 'react';
import { IonIcon, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButtons, IonButton } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import EmoticonRating from '../../components/emoticon-rating'
import useWebShare from "react-use-web-share";
import config from '../../config';

import './assets/css/DiscoverVote.scss'



const gotoBack = (e, props) => {
  e.preventDefault()
  props.history.goBack()
}

const DiscoverVote: React.FC<{history}> = (props) => {

  const [value, setValue] = React.useState(-1);
  const [sliderImage, setSliderImage] = React.useState(
    [
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image1.jpg',
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image2.jpg',
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image3.jpg',
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image4.jpg'
    ]
  );
  const [userImage, setUserImage] = React.useState('https://experiencecontent.blob.core.windows.net/user/5717f23a-d765-48d6-ac16-f11169860c19/profile.jpg')
  const [valueText] = React.useState([
    'hates', 'does not like', 'might like', 'likes', 'loves'
  ]);
  const [userName, setUserName] = React.useState('Christian')
  
  const { share } = useWebShare();

  const [animationFinished, setAnimationFinished] = React.useState(false);
  const [imageAnimationFinished, setImageAnimationFinished] = React.useState(false);

  // ToDo: Static test text which needs to be changed
  // ToDo: Add image for social web sharing
  function shareClick() {
    share({
      title: 'Parrot Tour',
      text:'Some text for Parrot Tour',
      url: 'Link to URL'
    });
  }

  const onChangeValue = (changedValue) => {
    setValue(changedValue)
    setAnimationFinished(false);
    setTimeout(() => {setAnimationFinished(true)}, 1000)
    setTimeout(() => {newUser()}, 2000)
  }

  const newUser = () => {
    setSliderImage([
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image4.jpg',
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image3.jpg',
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image2.jpg',
      'https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image1.jpg'
    ])
    setUserImage('https://experiencecontent.blob.core.windows.net/user/2fb1c8e4-42a4-43a6-a337-b8cc52c83d3f/profile.jpg')
    setValue(-1)
    setUserName("Sarah")
    setAnimationFinished(false);
    setTimeout(() => {setAnimationFinished(true)}, 1000)
    setImageAnimationFinished(true)
    setImageAnimationFinished(false)
  }

  const slider = (
    <AwesomeSlider style={{height: window.innerHeight - 300}} cssModule={AwesomeSliderStyles} bullets={true}>
      {sliderImage.map((item, index)=> {
        return (<div key={index} data-src={item} />)
      })}
    </AwesomeSlider>
  )

  const onAnimationEnd = () => {
    setAnimationFinished(true);
  }

  const gotoNoContacts = () => {
    props.history.push('/no_contacts')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={(e) => {gotoBack(e, props)}}>
            <i className="fal fa-times custom-icon-size-small"></i>
          </IonButtons>
          <IonButtons slot="end" onClick={() => { shareClick()}}>
            <i className="fal fa-share-alt custom-icon-size-small"></i>
          </IonButtons>
          <IonTitle>{config.brand.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        
        <IonRow class="custom-height-35 align-item-center">
          <IonCol size="9" className="custom-title-font-size">
            Title
          </IonCol>
          <IonCol size="1">
            <span className="icon-size-small">
              <i className="fal fa-bookmark"></i>
            </span>
          </IonCol>
          <IonCol size="1">
            <span className="icon-size-small">
              <i className="fal fa-paper-plane"></i>
            </span>
          </IonCol>
          <IonCol size="1">
            <span className="icon-size-small">
              <IonIcon icon={ellipsisHorizontal}/>
            </span>
          </IonCol>
        </IonRow>

        <div className="position-relative">
          {slider}
          <img alt="" src={userImage}  className={imageAnimationFinished ? '' : "bottom-profile-circle-img flip-in-hor-top"} />
        </div>
        <div className="justify-content-space-between margin-10 ">
            <IonButton fill="clear" className="custom-title-font-size black-button-text z-index-3" onClick={gotoNoContacts}>
              <i className="fas fa-undo"></i>
            </IonButton>
            <IonButton fill="clear" className="custom-title-font-size black-button-text z-index-3" onClick={gotoNoContacts}>
              <i className="fas fa-info"></i>
            </IonButton>
        </div>
        <div className="justify-content-center margin-top-20">
          {value === -1 ? <h4 className={animationFinished ? '' : "slide-in-right"} onAnimationEnd={onAnimationEnd}>{userName}</h4> : <h4 className={animationFinished ? '' : "slide-in-right"} onAnimationEnd={onAnimationEnd}>{valueText[value]}</h4> }
        </div>
        <EmoticonRating value={value} changeValue={(changedValue) => {onChangeValue(changedValue)}}/>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverVote;
