import React from 'react';
import {IonButton, IonItem, IonTitle, IonToolbar} from '@ionic/react';

interface ContainerProps { }

const ToolBar: React.FC<ContainerProps> = () => {
    return (
        <IonToolbar>
            <IonTitle>My App</IonTitle>
            <IonItem>
                <IonButton fill="outline" type="submit" routerLink="/register">Registrati</IonButton>
                <IonButton fill="outline" type="submit" routerLink="/login">Accedi</IonButton>
            </IonItem>
        </IonToolbar>
    );
};

export default ToolBar;