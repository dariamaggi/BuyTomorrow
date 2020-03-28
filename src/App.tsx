import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
import Register from './pages/Register';
import Registercompany from './pages/Registercompany';
import Search from './pages/Search';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { register } from './serviceWorker';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/addproduct" component={AddProduct} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/registercompany" component={Registercompany} exact={true} />
        <Route path="/search" component={Search} exact={true} />

        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);




export default App;
