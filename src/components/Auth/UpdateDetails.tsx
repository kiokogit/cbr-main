import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonLabel,
    IonNavLink,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    useIonLoading,
    useIonRouter,
    IonSelect,
    IonSelectOption
  } from '@ionic/react';
  import React, { useEffect, useState } from 'react';
  import { logInOutline, personCircleOutline, arrowBackCircleOutline } from 'ionicons/icons';
  import './styles.css'



const UpdateDetails: React.FC = () => {
const router = useIonRouter();

    return (
        <IonPage className='main'>
          <IonHeader>
            <IonToolbar >
              <IonButton className='cl_' onClick={() => router.goBack()}  fill="clear">
                <IonIcon slot="icon-only" style={{color: 'rgba(2, 39, 8, 0.85)'}} icon={arrowBackCircleOutline}></IonIcon>
              </IonButton>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow class="ion-justify-content-center">
                  <IonText className="app_name_full" style={{fontSize: '1em'}}>
                    Welcome to CBR
                  </IonText>
              </IonRow>

              <IonRow class="ion-justify-content-center ion-margin-top">
                  <IonText className="form_title">
                  Update Details
                  </IonText>
              </IonRow>
              <IonRow class="ion-justify-content-center ">
                <IonCard className='credetials_form ion-justify-content-center'>
                  <IonCardContent>
                    <form onSubmit={() => router.push('/dashboard', 'forward', 'replace')}>
                      <p style={{color: 'gray', fontSize: '12px', marginTop: '5px', marginBottom: '5px', textAlign: 'center'}}>
                      Update Your details
                      </p>
                      <IonLabel style={{fontSize: '12px'}}>Phone number</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} placeholder='' type='tel' name='phone' />
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Gender</IonLabel>
                      <div style={{width: '100%'}}>
                      <select name="gender" id="gender" style={{width: '100%', borderRadius: '4px'}}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Age Range</IonLabel>
                      <div style={{width: '100%'}}>
                        <select name="age" id="age_range" style={{width: '100%', borderRadius: '4px'}}>
                            <option value="0-12">Below 12 years</option>
                            <option value="13-18">13 to 18 years</option>
                            <option value="19-30">19 to 30 years</option>
                            <option value="31-45">31 to 45 years</option>
                            <option value="31-45">45 to 60 years</option>
                            <option value="60-100">Above 60 years</option>
                        </select>
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Church/Institution</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} type='text' name='institution'/>
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Residence</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} type='text' name='residence'/>
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>County</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} type='text' name='country'/>
                      </div>
                      <div style={{width: '100%', marginTop: '10px', justifyContent: 'center', display: 'flex'}}>
                        <button className='submit_button'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </IonCardContent>
                </IonCard>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}


export default UpdateDetails
