import React from 'react';
import {
    IonTabs,
    IonTab,
    IonToolbar,
    IonTabBar,
    IonTabButton,
    IonHeader,
    IonTitle,
    IonContent,
    IonIcon,
} from '@ionic/react';

import { playCircle, radio, library, search } from 'ionicons/icons';


function BottomNavBar() {
    return (
        <IonTabs>
            <IonTab tab="home">
            </IonTab>
            <IonTab tab="radio">
                =
            </IonTab>
            <IonTab tab="library">
            </IonTab>
            <IonTab tab="search">
                <div id="search-page">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Search</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                </div>
            </IonTab>

            <IonTabBar slot="bottom">
                <IonTabButton tab="home">
                    <IonIcon icon={playCircle} />
                    Listen Now
                </IonTabButton>
                <IonTabButton tab="radio">
                    <IonIcon icon={radio} />
                    Radio
                </IonTabButton>
                <IonTabButton tab="library">
                    <IonIcon icon={library} />
                    Library
                </IonTabButton>
                <IonTabButton tab="search">
                    <IonIcon icon={search} />
                    Search
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}
export default BottomNavBar;