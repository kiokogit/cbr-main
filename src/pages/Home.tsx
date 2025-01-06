import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Intro from '../components/Intro/Intro';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage className='main_padding'>
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
        <Intro onFinish={() => {}}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
