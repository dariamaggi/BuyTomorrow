import React from 'react';
import { IonSearchbar, IonToolbar,IonPage,IonTitle, IonButton, IonHeader,IonLabel,IonItem,IonInput,IonSelectOption, IonSelect, IonImg, IonContent } from '@ionic/react';
import ToolBar from '../components/ToolBar';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";


const Product: React.FC = (props) => {
  
  const location = useLocation();
  const id=location.search.substr(4)

  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
        <h1>Titolo prodotto</h1>
        <img width="250" height="110" src="https://www.r101.it/resizer/616/348/true/1467622033790_1576660195.jpg--capire_i_gatti__solo_alcune_persone_sono_in_grado_di_farlo.jpg?1576660195000"></img>
        <h6>10$</h6>
        <h6>Breve descrizione molto esplicativa ma alla fine quello che importa e vedere se funziona bene il tutto non è importante come fosse antani</h6>
        <IonItem>
          
          <IonLabel>Quantità</IonLabel>
          <IonSelect value="quantità">
            <IonSelectOption value="cat">1</IonSelectOption>
            <IonSelectOption value="dog">2</IonSelectOption>
            <IonSelectOption value="dog">3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton>Aggiungi al carrello</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Product;

