import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonTabBar, IonBadge, IonIcon,  IonCardContent, IonCard, IonTabs, IonTabButton, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail } from '@ionic/react';
import React,{useState, useEffect} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import ToolBar from '../components/ToolBar';
import './Home.css';
import Tab from '../components/Tab';

function User() {
  const [purchase, setPurchase] = useState([]);
  fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/purchase.json')
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      setPurchase(data)
  });

  const [product, setProduct] = useState([]);
  fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/product.json')
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      setProduct(data)
  });
  
  
  return (
      <div>
          <h2>{JSON.stringify(product)}.</h2>
      </div>
  );
}

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
      
        <IonThumbnail>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonThumbnail>
        <h6>Gino Rossi</h6>
        <h1>Dati</h1>
        <h6>Via Roma 09055, Atlantide </h6>
        
        <h1>Articoli</h1>
        <h6>Cerca i tuoi articoli</h6>
        <IonSearchbar></IonSearchbar>

        <User></User>

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