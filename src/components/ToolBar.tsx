import React from 'react';
import {IonButton, IonRow, IonItem, IonTitle, IonToolbar, IonIcon} from '@ionic/react';


interface ContainerProps { }

const ToolBar: React.FC<ContainerProps> = () => {
    let logout = () => {
        localStorage.removeItem('user');
        window.location.href ="./home"

    }

    
    return (
        
        <IonToolbar>
             <IonRow>
            <IonTitle size="large">Buy2morrow</IonTitle>
                
                <IonButton fill="outline" type="submit"  routerLink="/login">Login</IonButton>
                <IonButton fill="outline" type="submit" routerLink="/register">Registrati</IonButton>
                <IonButton fill="outline" type="submit" onClick={() => logout()}>Logout </IonButton>
                </IonRow>
        </IonToolbar>
    );
};

export default ToolBar;