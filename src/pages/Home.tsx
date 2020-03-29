import {IonThumbnail, IonImg, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons } from '@ionic/react';
import React from 'react';
import ToolBar from '../components/ToolBar';
import './Home.css';
import image from '../assets/home.jpg'


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
            <IonImg src={image} />
      </IonContent>
    </IonPage>
  );
};

export default Home;