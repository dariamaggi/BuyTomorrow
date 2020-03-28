import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonList, IonRouterLink } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import ToolBar from '../components/ToolBar';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonLabel>Email</IonLabel>
          <IonItem>
            <IonInput name="email" type="email" placeholder="your@email.com" required></IonInput>
          </IonItem>
          <IonLabel>Password</IonLabel>
          <IonItem>
            <IonInput name="password" type="password" placeholder="password" required></IonInput>
          </IonItem>
          <IonButton>Accedi</IonButton>
          
          <IonRouterLink href="/login" class="underline">Non sei registrato?</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
