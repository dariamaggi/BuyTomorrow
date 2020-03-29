import { IonThumbnail, IonCol, IonButton, IonSearchbar, IonContent, IonHeader, IonPage, IonLabel, IonButtons } from '@ionic/react';
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
          <main>
            <div>
              <IonLabel>Inizia la ricerca!</IonLabel>
              <p><IonSearchbar></IonSearchbar></p>
              
            </div>
          </main>
        </IonCol>
      </IonContent>

    </IonPage >
  );
};

export default Home;