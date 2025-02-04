

import { IonButtons, IonContent, IonHeader, IonButton, IonIcon, IonAvatar, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonText } from '@ionic/react';
import React, {useState} from 'react';
import './styles.css';
import OngoingDash from '../../components/Dashboards/OngoingDash';
import PendingStart from '../../components/Dashboards/PendingStart';
import NotEnrolled from '../../components/Dashboards/NotEnrolled';
import { ellipsisHorizontal, ellipsisVertical, notifications, personCircle } from 'ionicons/icons';
import BottomNavBar from "../../components/Dashboards/BottomBarComponent";


const Dash: React.FC = () => {
    const [cbrStatus, setCbrStatus] = useState({
        enrolled: true,
        classEnrolled: {
            class_title: "JKUATCU CBR 2025",
            class_status: "ongoing",
            start_date: "2025-01-6",
        }
    })


  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="secondary" color={'red'}>
              <IonButton size='default'>
                <IonAvatar style={{width: '30px', height: '30px', border: '1px solid rgba(94, 136, 101, 1)'}}>
                  <img alt="Silhouette" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
              </IonButton>
              <IonText className='app_name_full' style={{fontSize: '16px'}}>Hello, Joan!</IonText>
            
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton size='small'>
                <IonIcon style={{color: 'rgba(94, 136, 101, 1)'}} slot="icon-only" icon={notifications}></IonIcon>
              </IonButton>
              <IonButton size='small'>
                <IonIcon style={{color: 'rgba(94, 136, 101, 1)'}} slot="icon-only" icon={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        {!cbrStatus.enrolled && <NotEnrolled requested_class={cbrStatus.classEnrolled} />}
        {cbrStatus.enrolled && cbrStatus.classEnrolled.class_status === "pending" && <PendingStart cbr={cbrStatus.classEnrolled} />}
        {cbrStatus.enrolled && cbrStatus.classEnrolled.class_status === "ongoing" && <OngoingDash cbr={cbrStatus.classEnrolled} />}

      </IonContent>
    </IonPage>
  );
};

export default Dash;



