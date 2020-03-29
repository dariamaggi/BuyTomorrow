import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardContent, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail, IonGrid, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import ToolBar from '../components/ToolBar';
import './Home.css';
import BrowseCoupons from '../components/BrowseCoupons';

const Home: React.FC = () => {

  const items = []
  //const [user, setUser] = useState({});
  let user=localStorage.getItem('user') ? localStorage.getItem('user') : null;
  
  let user_parse= user ? JSON.parse(user) : null
  
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <div>

            <img  width="170" height="170" src="https://i.ya-webdesign.com/images/profile-image-png-14.png" />

          </div>
          <div>
            <h1>Dati</h1>
            <h6>Nome utente: {user_parse["name"]}</h6>
            <h6>Email: {user_parse["email"]}</h6>
            <h6>Indirizzo: Via Roma 09055, Pisa </h6>
          </div>
          </IonRow>
        <h1>Articoli acquistati</h1>
        <h6>Cerca i tuoi articoli</h6>
       

        <BrowseCoupons></BrowseCoupons>


      </IonContent>
    </IonPage>
  );
};
export default Home;