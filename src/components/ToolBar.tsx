import React from 'react';
import {IonButton, IonRow, IonItem, IonTitle, IonToolbar, IonIcon} from '@ionic/react';


interface ContainerProps { }

const ToolBar: React.FC<ContainerProps> = () => {
    return (
        
        <IonToolbar>
             <IonRow>
            <IonTitle size="large">Buy2morrow</IonTitle>
                <IonButton>
                    <IonIcon name="home"></IonIcon>
                </IonButton>
                <IonButton fill="outline" type="submit"  routerLink="/login">Accedi
                </IonButton>
                <IonButton fill="outline" type="submit" routerLink="/register">Registrati</IonButton>
            
                </IonRow>
        </IonToolbar>
    );
};

export default ToolBar;