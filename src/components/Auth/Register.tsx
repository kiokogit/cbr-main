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
  } from '@ionic/react';
  import React, { useEffect, useState } from 'react';
  import { logInOutline, personCircleOutline, arrowBackCircleOutline } from 'ionicons/icons';
  import { Preferences } from '@capacitor/preferences';
  import './styles.css'
const Register: React.FC = () => {
    const router = useIonRouter();

    return (
        <IonPage className='main'>
          <IonHeader>
            <IonToolbar >
              <IonButton className='cl_' onClick={() => router.goBack()} fill="clear">
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
                  Create an account
                  </IonText>
              </IonRow>
              <IonRow class="ion-justify-content-center ">
                <IonCard className='credetials_form ion-justify-content-center'>
                  <IonCardContent>
                    <form onSubmit={() => router.push('/auth/update', 'forward', 'replace')}>
                      <p style={{color: 'gray', fontSize: '12px', marginTop: '10px', marginBottom: '10px', textAlign: 'center'}}>
                      Enter your credentials
                      </p>
                      <IonLabel style={{fontSize: '12px'}}>Full Name</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} placeholder='' type='text' name='full_name' />
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Email</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} placeholder='' type='email' name='email' />
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Password</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} type='password' name='password'/>
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Confirm Password</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} type='password' name='confirm_password'/>
                      </div>
                      <div style={{width: '100%', marginTop: '10px', justifyContent: 'center', display: 'flex'}}>
                        <button className='submit_button'>
                          Submit
                        </button>
                      </div>
            
                      <hr style={{marginTop: '1px', borderTop: '1px solid gray'}} />
                      <p style={{color: 'gray', fontSize: '10px', marginTop: '10px', textAlign: 'center'}}>
                        or Continue with
                      </p>

                      <div style={{width: '100%', marginTop: '10px', justifyContent: 'center', display: 'flex'}}>
                        <IonButton size='small' fill='clear' style={{border: '1px solid gray', borderRadius: '5px'}}>
                          <img style={{width: '20px'}} alt="Google sign-in" 
                              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
                      </IonButton>
                        </div>
    
                      <div style={{fontSize: '12px', textAlign:'center', marginTop: '10px', width:'100%', color: 'rgba(185, 177, 206, 1)'}}>
                        <IonLabel style={{fontSize: '12px'}}>
                          Already have an account? <IonText className='cl_' onClick={() => router.push('/auth/login', 'forward', 'pop')} style={{color: 'rgba(157, 204, 165, 1)'}}> Log in </IonText>
                        </IonLabel>
                      </div>
                    </form>
                  </IonCardContent>
                </IonCard>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}

export default Register
