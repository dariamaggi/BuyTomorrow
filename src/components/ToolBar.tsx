import React from 'react';
import {IonButton, IonItem, IonTitle, IonToolbar, IonIcon} from '@ionic/react';


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
        </IonToolbar>
    );
};

export default ToolBar;