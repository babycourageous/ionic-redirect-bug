import * as React from 'react'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab3.css'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

function Login({ onLogin }: any) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={onLogin}>Login</IonButton>
        <div>
          <Link to="/asdf">GOTO TAB 1</Link>
        </div>
        <IonItem routerLink="/register">
          <IonLabel>GOTO REGISTER</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Login
