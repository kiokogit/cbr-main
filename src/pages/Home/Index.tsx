import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import Intro from '../../components/Intro/Intro';
import './Home.css';

const Home: React.FC = () => {

  const router = useIonRouter();

  return (
    <IonPage className='main_padding into-page'>
      {/* <IonHeader translucent={false}>
        <IonToolbar color={"rgba(94, 136, 101, 1)"}>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Intro onFinish={() => router.push('/auth/login')}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
