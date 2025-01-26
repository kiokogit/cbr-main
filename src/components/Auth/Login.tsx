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


const Login: React.FC = () => {
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
                    Login
                  </IonText>
              </IonRow>
              <IonRow class="ion-justify-content-center ">
                <IonCard className='credetials_form ion-justify-content-center'>
                  <IonCardContent>
                    <form onSubmit={() => router.push('/dashboard', 'forward', 'replace')}>
                      <p style={{color: 'gray', fontSize: '12px', marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>
                      Enter your credentials
                      </p>
                      <IonLabel style={{fontSize: '12px'}}>Email</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} placeholder='' type='email' />
                      </div>
                      <IonLabel style={{fontSize: '12px'}}>Password</IonLabel>
                      <div style={{width: '100%'}}>
                        <input style={{width: '100%'}} type='password' />
                      </div>
                      <div style={{fontSize: '12px', textAlign:'right', marginTop: '10px', width:'100%'}}>
                        <IonLabel onClick={() => router.push('/auth/reset')} >Forgot password? </IonLabel>
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
                          Don't have an account? <IonText class='cl_' onClick={() => router.push('/auth/register', 'forward', 'pop')} style={{color: 'rgba(157, 204, 165, 1)'}}> Sign up </IonText>
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


export default Login
