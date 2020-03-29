import { IonContent, IonCol,IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonList, IonRouterLink, IonRow } from '@ionic/react';
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
        <div id="parent">
          <div id="childer">
              <IonLabel >Nome</IonLabel>
          <IonItem >
            <IonInput name="name" type="text" placeholder="Marco" required></IonInput>
          </IonItem>
          
          <IonLabel >Cognome</IonLabel>
          <IonItem  >
            <IonInput name="surname" type="text" placeholder="Rossi" required></IonInput>
          </IonItem>
       
          <IonLabel>Email</IonLabel>
          <IonItem>
            <IonInput name="email" type="email" placeholder="rossi@mymail.com" required></IonInput>
          </IonItem>
          <IonLabel>Password</IonLabel>
          <IonItem>
            <IonInput name="password" type="password" placeholder="password" required></IonInput>
          </IonItem>
          <IonLabel>Confirm Password</IonLabel>
          <IonItem>
            <IonInput name="password" type="password" placeholder="password" required></IonInput>
          </IonItem>
          <IonButton>Accedi</IonButton>
          <IonButton>Login con Google</IonButton>
          </div>
          </div>

      </IonContent>
    
    </IonPage>
  );
};

export default Home;
