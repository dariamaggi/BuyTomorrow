import React, {useState, useEffect, constructor} from 'react';
import { IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardContent, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail, IonGrid, IonRow } from '@ionic/react';


interface ContainerProps { }

const BrowseCoupons: React.FC<ContainerProps> = () => {

    const [value, setValue] = useState([]);

    fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/product.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setValue(data)
        });

    let items = []
    for (const v of value) {
        items.push(<IonCol col-1 col-xl-2 col-lg-3 col-md-4>
            <IonCard>
            <img width="150" height="80" src="https://www.r101.it/resizer/616/348/true/1467622033790_1576660195.jpg--capire_i_gatti__solo_alcune_persone_sono_in_grado_di_farlo.jpg?1576660195000" />
            <IonCardHeader>
                <IonCardSubtitle>Abbigliamento</IonCardSubtitle>
                <IonCardTitle>{v["name"]}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Un bel gatto per addobbare il vostro soggiorno, a soli 92 cent.
            </IonCardContent>
            </IonCard>
        </IonCol>)
        }

return (
    <IonGrid>
        <IonRow>
            {items}
        </IonRow>
    </IonGrid>
    
);
};

export default BrowseCoupons;