import React from 'react';
import { IonSearchbar, IonToolbar,IonPage,IonTitle, IonButton,IonCard, IonCardContent,IonCardHeader, IonCardTitle, IonCardSubtitle, IonHeader,IonLabel,IonItem,IonInput, IonContent } from '@ionic/react';
import ToolBar from '../components/ToolBar';
import './Home.css';
import BrowseCoupons from '../components/BrowseCoupons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
        <h1>Carrello</h1>
        <BrowseCoupons></BrowseCoupons>

          <IonButton>Acquista</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

