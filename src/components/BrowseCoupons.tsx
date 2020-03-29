import React, {useState, useEffect, constructor} from 'react';
import {IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardContent, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonThumbnail, IonGrid, IonRow, IonItem } from '@ionic/react';
interface ContainerProps { }
const BrowseCoupons: React.FC<ContainerProps> = () => {
    const [value, setValue] = useState([]);
    const [searchText, setSearchText] = useState('');
    fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/product.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setValue(data)
        });
    const [it, setIt] = useState<JSX.Element[]>([
        <IonCol col-1 col-xl-2 col-lg-3 col-md-4>
            <IonCard routerLink={"./product?id=5e7f8c6fb5d80f94407fa6d8"}>
            <img src="https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg" />
            <IonCardHeader>
                <IonCardSubtitle>Coupon</IonCardSubtitle>
                <IonCardTitle>{"Lezioni di chitarra"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {" Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </IonCardContent>
            </IonCard>
        </IonCol>, 
        <IonCol col-1 col-xl-2 col-lg-3 col-md-4>
        <IonCard routerLink={"./product?id=5e7f8c6fb5d80f94407fa6d8"}>
        <img src="https://cdn.pixabay.com/photo/2015/09/02/12/43/meal-918639_960_720.jpg" />
        <IonCardHeader>
            <IonCardSubtitle>Coupon</IonCardSubtitle>
            <IonCardTitle>{"Cena per due"}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {" Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        </IonCardContent>
        </IonCard>
        </IonCol>,
        <IonCol col-1 col-xl-2 col-lg-3 col-md-4>
        <IonCard routerLink={"./product?id=5e7f8c6fb5d80f94407fa6d8"}>
        <img src="https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528_960_720.jpg" />
        <IonCardHeader>
            <IonCardSubtitle>Coupon</IonCardSubtitle>
            <IonCardTitle>{"Lezioni di canto"}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {" Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        </IonCardContent>
        </IonCard>
        </IonCol>,
        <IonCol col-1 col-xl-2 col-lg-3 col-md-4>
        <IonCard routerLink={"./product?id=5e7f8c6fb5d80f94407fa6d8"}>
        <img src="https://cdn.pixabay.com/photo/2017/04/03/15/48/saturnia-2198749_960_720.jpg" />
        <IonCardHeader>
            <IonCardSubtitle>Coupon</IonCardSubtitle>
            <IonCardTitle>{"Giornato alle terme"}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {" Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        </IonCardContent>
        </IonCard>
        </IonCol>,
        <IonCol col-1 col-xl-2 col-lg-3 col-md-4>
        <IonCard routerLink={"./product?id=5e7f8c6fb5d80f94407fa6d8"}>
        <img src="https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg" />
        <IonCardHeader>
            <IonCardSubtitle>Coupon</IonCardSubtitle>
            <IonCardTitle>{"Viaggio in una meta europea"}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {" Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        </IonCardContent>
        </IonCard>
        </IonCol>
    ]);
    
    
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
        <div>
            <IonSearchbar onIonChange={e => load_cards(e.detail.value!)}></IonSearchbar>
            <IonGrid>
                <IonRow>
                    {it}
                </IonRow>
            </IonGrid>
        </div>
    );
};
export default BrowseCoupons;