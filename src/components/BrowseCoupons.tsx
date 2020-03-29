import React, {useState, useEffect, constructor} from 'react';
import {IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardContent, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail, IonGrid, IonRow, IonItem } from '@ionic/react';


interface ContainerProps { }

const BrowseCoupons: React.FC<ContainerProps> = () => {

    const [it, setIt] = useState<JSX.Element[]>();
    const [value, setValue] = useState([]);
    const [searchText, setSearchText] = useState('');

    fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/product.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setValue(JSON.parse(data))
        });

    function load_cards(query: string) {  
        let a:JSX.Element[] = []
        value.forEach(function (item,index) {
            let name:string = item["name"]
            if(name.includes(query)){
                let c = (<IonCol col-1 col-xl-2 col-lg-3 col-md-4>
                    <IonCard routerLink={"./product?id="+item["id"]}>
                    <img src={item["img_url"]} />
                    <IonCardHeader>
                        <IonCardSubtitle>Coupon</IonCardSubtitle>
                        <IonCardTitle>{item["name"]}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {item["description"]}
                    </IonCardContent>
                    </IonCard>
                </IonCol>)
                a.push(c)      
            }
        });
        setIt(a)
    }
    return (
        <IonItem>
            <IonSearchbar value={searchText} onIonChange={e => load_cards(e.detail.value!)}></IonSearchbar>
            <IonGrid>
                <IonRow>
                    {it}
                </IonRow>
            </IonGrid>
        </IonItem>
    );
};



export default BrowseCoupons;