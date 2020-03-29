import { IonThumbnail, IonCol, IonButton, IonSearchbar, IonContent, IonHeader, IonPage, IonLabel, IonButtons, IonRow } from '@ionic/react';
import React from 'react';
import ToolBar from '../components/ToolBar';
import './Home.css';
import image from '../assets/logoApp.png'
import BrowseCoupons from './../components/BrowseCoupons'


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>

      <IonContent >
        {/* <IonCol>
          <main>
            <div>
              <IonLabel>Inizia la ricerca!</IonLabel>
              <p><IonSearchbar></IonSearchbar></p>
              <BrowseCoupons></BrowseCoupons>
            </div>
          </main>
        </IonCol> */}
      <IonRow>         
          </IonRow>

        <h6>Cerca i tuoi articoli</h6>
       

        <BrowseCoupons></BrowseCoupons>


      </IonContent>

    </IonPage >
  );
};

export default Home;