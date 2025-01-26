import {
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonRow,
    IonText,
    IonToolbar,
    useIonRouter,
  } from '@ionic/react';
  import React from 'react';
  import { arrowBackCircleOutline } from 'ionicons/icons';
  import './styles.css'

const ResetPass: React.FC = () => {
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
                    Reset Password
                  </IonText>
              </IonRow>
              <IonRow class="ion-justify-content-center ">
                <IonCard className='credetials_form ion-justify-content-center'>
                  <IonCardContent>
                    <form onSubmit={() => router.push('/auth/login', 'forward', 'replace')}>
                      <p style={{color: 'gray', fontSize: '12px', marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>
                      Enter your credentials
                      </p>
                      <IonLabel style={{fontSize: '12px'}}>Email</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} placeholder='' type='email' />
                      </div>
                      
                      <div style={{width: '100%', marginTop: '10px', justifyContent: 'center', display: 'flex'}}>
                        <button className='submit_button'>
                          Submit
                        </button>
                      </div>
    
                      <div style={{fontSize: '12px', textAlign:'center', marginTop: '10px', width:'100%', color: 'rgba(185, 177, 206, 1)'}}>
                        <IonLabel style={{fontSize: '12px'}}>
                          Oh, I have Remembered. <IonText class='cl_' onClick={() => router.push('/auth/login')} style={{color: 'rgba(157, 204, 165, 1)'}}> Log in </IonText>
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


export default ResetPass
