import React from 'react';

import { IonHeader, IonContent } from '@ionic/react';

interface SettingDetails {
  content: object;
}

const TechDetail: React.FC<SettingDetails> = ({ content }) => {
  return (
    <React.Fragment>
      <IonHeader translucent>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {content}
      </IonContent>
    </React.Fragment>
  );
};

export default TechDetail