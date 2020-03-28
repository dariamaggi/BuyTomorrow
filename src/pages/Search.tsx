

import React from 'react';
import { IonSearchbar, IonToolbar,IonPage,IonTitle, IonButton, IonHeader,IonLabel,IonItem,IonInput, IonContent } from '@ionic/react';
import ToolBar from '../components/ToolBar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
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

