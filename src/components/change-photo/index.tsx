import React, { useState } from 'react';
import { IonActionSheet, IonRow, IonCol, IonButton } from '@ionic/react';
import { close, cameraOutline, personCircleOutline, archiveOutline } from 'ionicons/icons';

import './assets/css/theme.scss';

const ChoosePhoto: React.FC<{history, title: string}> = (props) => {

    const [showActionSheet, setShowActionSheet] = useState(false);
 
  return (
        <div id="brife">
          <IonRow>
            <IonCol size="2"></IonCol>
            <IonCol size="8" className="text-align-center">
              <IonButton onClick={() => setShowActionSheet(true)} fill="clear">{props.title}</IonButton>
            </IonCol>
            <IonCol size="2"></IonCol>
          </IonRow>
          <hr className="line-divider"/>

          <IonRow>
            <IonActionSheet
              isOpen={showActionSheet}
              onDidDismiss={() => setShowActionSheet(false)}
              cssClass='my-custom-class dark-text'
              header="Change contact photo"
              buttons={[{
                text: 'Take Photo',
                icon: cameraOutline,
                handler: () => {
                  console.log('Delete clicked');
                }
              }, {
                text: 'Choose From Library',
                icon: archiveOutline,
                handler: () => {
                  console.log('Share clicked');
                }
              }, {
                text: 'Select Avatar',
                icon: personCircleOutline,
                handler: () => {
                  props.history.push('./selectavatar')
                }
              }, {
                text: 'Cancel',
                icon: close,
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }]}
            >
            </IonActionSheet>
          </IonRow>
        </div>
  );
};

export default ChoosePhoto;

