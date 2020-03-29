import React from 'react';
import {IonButton, IonItem,IonItemDivider, IonTitle, IonToolbar, IonIcon, IonContent} from '@ionic/react';

import Tab from '../components/Tab';

interface ContainerProps { }

const ToolBar: React.FC<ContainerProps> = () => {
    return (
        
        <IonToolbar>
            <IonTitle>Buy2morrow</IonTitle>
            <IonItem>
                <IonButton>
                    <IonIcon name="home"></IonIcon>
                </IonButton>
                <IonButton fill="outline" type="submit" routerLink="/register">Registrati</IonButton>
                <IonButton fill="outline" type="submit" routerLink="/login">Accedi</IonButton>
            </IonItem>
            <IonItem>
                <Tab></Tab>
            </IonItem>
        </IonToolbar>
        
    );
};

export default ToolBar;