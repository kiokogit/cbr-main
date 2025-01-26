import { IonButtons, IonContent, IonHeader, IonBackButton, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import './styles.css';
import Login from '../../components/Auth/Login'
import Register from '../../components/Auth/Register';
import ResetPass from '../../components/Auth/ResetPass';
import UpdateDetails from '../../components/Auth/UpdateDetails';

const Auth: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonRouterOutlet id="main">
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/reset" component={ResetPass} />
          <Route exact path="/auth/update" component={UpdateDetails} />
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Auth;