import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardContent, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import ToolBar from '../components/ToolBar';
import './Home.css';
import BrowseCoupons from '../components/BrowseCoupons';

const Home: React.FC = () => {

  const items = []
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
        
        <IonThumbnail>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonThumbnail>
        <h6>Gino Rossi</h6>

        <h1>Dati</h1>
        <h6>Via Roma 09055, Atlantide </h6>
        
        <h1>Articoli</h1>
        <h6>Cerca i tuoi articoli</h6>
        <IonSearchbar></IonSearchbar>
        <BrowseCoupons></BrowseCoupons>
      </IonContent>
    </IonPage>
  );
};

export default Home;
