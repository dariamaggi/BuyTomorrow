import React from 'react';
import {IonButton, IonRow, IonItem, IonTitle, IonToolbar, IonIcon} from '@ionic/react';

import Tab from '../components/Tab';

interface ContainerProps { }

const ToolBar: React.FC<ContainerProps> = () => {
    let logout = () => {
        localStorage.removeItem('user');
        window.location.href ="./home"

    }

    let lo_button = <IonButton fill="outline" type="submit" onClick={() => logout()}>Logout </IonButton>

    console.log('log user', localStorage.getItem('user'))
    if (localStorage.getItem('user') === null) {
        lo_button = <IonItem></IonItem>
    }
    
    return (
        
        <IonToolbar>
             <IonRow>
            <IonTitle size="large">Buy2morrow</IonTitle>
                
                <IonButton fill="outline" type="submit"  routerLink="/login">Login</IonButton>
                <IonButton fill="outline" type="submit" routerLink="/register">Registrati</IonButton>
                {lo_button}
                </IonRow>

            <IonItem>
                <Tab></Tab>
            </IonItem>
        </IonToolbar>
        
    );
};

export default ToolBar;