import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import React from 'react';
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
        <IonList>
          <IonItem>
            <IonLabel>Nome articolo</IonLabel>
            <IonInput placeholder="Nome Articolo"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Prezzo</IonLabel>
            <IonInput placeholder="Prezzo"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Quantità massima</IonLabel>
            <IonInput placeholder="Quantità massima"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Descrizione</IonLabel>
            <IonInput placeholder="Descrizione"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Data di scadenza</IonLabel>
            <IonInput placeholder="Data di scadenza"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Immagine</IonLabel>
            <IonInput placeholder="Drag and drop"></IonInput>
          </IonItem>
        </IonList>
        <IonButton> Inserisci </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
