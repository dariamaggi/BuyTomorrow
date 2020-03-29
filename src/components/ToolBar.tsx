import React, { useState, useContext } from 'react';
import { IonButton, IonRow, IonItem, IonTitle, IonToolbar, IonIcon } from '@ionic/react';

import Tab from '../components/Tab';

interface ContainerProps { }

const ToolBar: React.FC<ContainerProps> = () => {
    let logout = () => {
        localStorage.removeItem('user');
        window.location.href = "./home"
    }

    return (

        <IonToolbar>
            <IonRow>
                <IonTitle size="large">Buy2morrow</IonTitle>
                {localStorage.getItem('user') == null ? (
                    <IonButton fill="outline" type="submit" routerLink="/login">Login</IonButton>

                ) : (
                    <IonItem></IonItem>
                    )}
                {localStorage.getItem('user') == null ? (
                    <IonButton fill="outline" type="submit" routerLink="/register">Registrati</IonButton>

                ) : (
                        <IonItem></IonItem>
                    )}


                {localStorage.getItem('user') ? (
                    <IonButton fill="outline" type="submit" onClick={() => logout()}>Logout </IonButton>
                ) : (
                        <IonItem></IonItem>
                    )}

            </IonRow>

            <IonItem>
                <Tab></Tab>
            </IonItem>
        </IonToolbar>

    );
};

export default ToolBar;