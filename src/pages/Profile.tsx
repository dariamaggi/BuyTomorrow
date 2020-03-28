import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardContent, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail } from '@ionic/react';
import React from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
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

        <IonCard>
          <img width="150" height="80" src="https://www.r101.it/resizer/616/348/true/1467622033790_1576660195.jpg--capire_i_gatti__solo_alcune_persone_sono_in_grado_di_farlo.jpg?1576660195000" />
          <IonCardHeader>
            <IonCardSubtitle>Abbigliamento</IonCardSubtitle>
            <IonCardTitle>Gatto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Un bel gatto per addobbare il vostro soggiorno, a soli 92 cent.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img width="150" height="80" src="https://www.r101.it/resizer/616/348/true/1467622033790_1576660195.jpg--capire_i_gatti__solo_alcune_persone_sono_in_grado_di_farlo.jpg?1576660195000" />
          <IonCardHeader>
            <IonCardSubtitle>Abbigliamento</IonCardSubtitle>
            <IonCardTitle>Gatto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Un bel gatto per addobbare il vostro soggiorno, a soli 92 cent.
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
