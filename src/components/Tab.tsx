import React from 'react';
import { IonTabs,IonContent, IonTabBar,IonRow, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet, IonCol } from '@ionic/react';
import { calendar, personCircle, map, informationCircle, home } from 'ionicons/icons';


interface ContainerProps { }

const Tab: React.FC<ContainerProps> = () => {
    return (
        <IonTabs>
            <IonTabBar slot="top">
                
                <IonTabButton href="./home" tab="home">
                    <IonRow>
                        <IonIcon icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonRow>
                </IonTabButton>

                <IonTabButton href="./profile" tab="profile">
                    <IonRow>
                        <IonIcon icon={personCircle}/>
                        <IonLabel>Profile</IonLabel>    
                    </IonRow>
                </IonTabButton>

                <IonTabButton href="./purchase" tab="map">
                    <IonRow>
                        <IonIcon icon={map} />
                        <IonLabel>Orders</IonLabel>
                    </IonRow>
                </IonTabButton>

                <IonTabButton tab="about">
                    <IonRow>
                        <IonIcon icon={informationCircle} />
                        <IonLabel>About</IonLabel>
                    </IonRow>
                </IonTabButton>
            </IonTabBar>
            
            <IonRouterOutlet></IonRouterOutlet>
        </IonTabs>
   );
};

export default Tab;