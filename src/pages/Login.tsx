import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonList, IonRouterLink } from '@ionic/react';
import React, { useState, useContext } from 'react';
import UserContext from './../context/user'
import ExploreContainer from '../components/ExploreContainer';
import ToolBar from '../components/ToolBar';

import './Home.css';
import App from '../App';
import { Redirect, useHistory } from 'react-router';

const Login: React.FC = (props) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  let _history = useHistory()
  let login = () => {
    fetch('https://raw.githubusercontent.com/rokity/BuyTomorrow/master/risorse/users.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let items: [] = data
        items.forEach(function (item) {
          if (item['email'] == email && item['password'] == password) {
            let user = {
              'email': email, "name": item['name'],
              "surname": item['surname'],
              "id": item['id']
            }
            localStorage.setItem('user', JSON.stringify(user));
            _history.push('/')
          }
        })

      });
  }
  return (
    <IonPage>
      <IonHeader>
        <ToolBar></ToolBar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>Email</IonLabel>
        <IonItem>
          <IonInput name="email" type="email" value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            clearInput placeholder="your@email.com" required></IonInput>
        </IonItem>
        <IonLabel>Password</IonLabel>
        <IonItem>
          <IonInput name="password" type="password" value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            clearInput placeholder="password" required></IonInput>
        </IonItem>
        <IonButton onClick={() => login()}>Accedi</IonButton>

        <IonRouterLink href="/login" class="underline">Non sei registrato?</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Login;
