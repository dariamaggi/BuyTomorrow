

import React from 'react';
import { IonSearchbar, IonToolbar,IonPage, IonTitle, IonButton, IonHeader,IonLabel,IonItem,IonInput, IonContent } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
      <IonSearchbar></IonSearchbar>
    </IonToolbar>
  </IonContent>

    
    </IonPage>
  );
};

export default Home;

