import { IonContent, IonIcon,IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonList, IonRouterLink } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buy Tomorrow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonLabel>Nome azienda</IonLabel>
          <IonItem>
            <IonInput name="name" type="text" placeholder="MyCompany" required></IonInput>
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
          <IonLabel>Partita Iva</IonLabel>
          <IonItem>
            <IonInput name="surname" type="number" placeholder="0000" required></IonInput>
          </IonItem>
          <IonLabel>Indirizzo</IonLabel>
          <IonItem>
            <IonInput name="address" type="text" placeholder="Via Montenapoleone" required></IonInput>
          </IonItem>
          <IonLabel>N°</IonLabel>
          <IonItem>
            <IonInput name="civic" type="number" placeholder="0"  required></IonInput>
          </IonItem>
          <IonLabel>CAP</IonLabel>
          <IonItem>
            <IonInput name="cap" type="number" placeholder="00000"  required></IonInput>
          </IonItem>
          <IonButton>Accedi</IonButton>
          
      </IonContent>
    
    </IonPage>
  );
};

export default Home;
