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

function Register({ onLogin }: any) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={onLogin}>Register</IonButton>
        <IonItem routerLink="/login">
          <IonLabel>GOTO LOGIN</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Register
