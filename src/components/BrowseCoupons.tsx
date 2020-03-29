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
            <IonCard routerLink={"./product?id="+v["id"]}>
            <img src={v["img_url"]} />
            <IonCardHeader>
                <IonCardSubtitle>Coupon</IonCardSubtitle>
                <IonCardTitle>{v["name"]}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {v["description"]}
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