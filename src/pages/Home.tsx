import {IonThumbnail, IonCol,IonButton, IonSearchbar, IonContent, IonHeader, IonPage, IonLabel, IonButtons } from '@ionic/react';
import React from 'react';
import ToolBar from '../components/ToolBar';
import './Home.css';
import image from '../assets/logoApp.png'


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      
      <IonContent >
        <IonCol>
      <div id="begin" ><IonLabel>Inizia la ricerca!</IonLabel></div>
      <div id="parent">
        
      <div id="child"> <IonSearchbar></IonSearchbar></div>
     
        
      </div> 
      </IonCol>
   </IonContent>
     
    </IonPage>
  );
};

export default Home;