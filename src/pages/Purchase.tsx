import React from 'react';
import { IonSearchbar, IonToolbar,IonPage,IonTitle, IonButton,IonCard, IonCardContent,IonCardHeader, IonCardTitle, IonCardSubtitle, IonHeader,IonLabel,IonItem,IonInput, IonContent } from '@ionic/react';
import ToolBar from '../components/ToolBar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
        <h1>Carrello</h1>
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
              <IonCardTitle>Cane</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Un bel gatto per addobbare il vostro soggiorno, a soli 92 cent.
            </IonCardContent>
          </IonCard>

          <IonButton>Acquista</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

