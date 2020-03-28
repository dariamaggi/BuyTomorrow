import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonList, IonRouterLink } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import ToolBar from '../components/ToolBar';

import './Home.css';
import App from '../App';

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  let login = () => {
    if(email=='admin' && password=='admin'){
        
    }
  }
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
          <IonInput name="email" type="email" value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            clearInput placeholder="your@email.com" required></IonInput>
        </IonItem>
        <IonLabel>Password</IonLabel>
        <IonItem>
          <IonInput name="password" type="password" value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            clearInput placeholder="password" required></IonInput>
        </IonItem>
        <IonButton onClick={() => login()}>Accedi</IonButton>

        <IonRouterLink href="/login" class="underline">Non sei registrato?</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
