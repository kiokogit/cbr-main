import { IonGrid, IonNavLink, IonText, IonSearchbar, IonRow,
    IonModal,
    IonCardContent,
    IonLabel, } from "@ionic/react";
import { useState, useRef } from "react";
import PopularClasses from './Cards/PopularClasses'
import Nearbyclasses from "./Cards/NearbyClasses"
import { OverlayEventDetail } from '@ionic/core/components';
import { COLORS, SIZES } from "../../constants";


const NotEnrolled = (props: any) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedClass, setSelectedClass] = useState({
        class_title: "",
        location: "",
        institution: "",
        info_required: []

    })

    const showModal = (cls: any) => {
        setVisible(true)
        setSelectedClass(cls)
    };
    const hideModal = () => {
        setVisible(false)
        setSelectedClass({
            class_title: "",
            location: "",
            institution: "",
            info_required: []
    
        })
    }

    const handleSearchClass = (event: Event) => {
        let query = '';
        const target = event.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
    
        setResults([].filter((d: string) => d.toLowerCase().indexOf(query) > -1));
      };


      const modal = useRef<HTMLIonModalElement>(null);
    
      function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
        if (event.detail.role === 'confirm') {
          hideModal();
        }
      }
      function dismiss() {
        modal.current?.dismiss();
        hideModal();
      }

    return (
        <IonGrid fixed>
            <IonRow class="ion-justify-content-center" style={{marginTop: 5}}>
                <IonText style={{textAlign: 'center', color: 'black', fontFamily: 'Roboto Mono'}}>CBR 2025</IonText>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{marginTop: 10, padding: 10, fontSize: '10px'}}>

            {props?.requested_class? <IonText style={{textAlign: 'center', color: 'rgba(24, 34, 25, 1)', fontFamily: 'Arial'}}>You have requested to join: {props?.requested_class?.class_title}. Requesting another will cancel current request.</IonText>

            : <IonText style={{textAlign: 'center', color: 'gray', fontFamily: 'Roboto Mono'}}>You are not enrolled to any ongoing CBR class.</IonText>}
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{marginTop: 10, marginBottom: 10}}>
                <IonText style={{textAlign: 'center', fontSize: '24px', fontWeight: "900", color: 'rgba(2, 39, 8, 0.85)'}}>Choose CBR Class</IonText>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{width: "100%"}}>
                <IonSearchbar 
                placeholder="Search Class..." 
                debounce={1000} 
                onIonInput={(event) => handleSearchClass(event)} 
                enterkeyhint="search"
                ></IonSearchbar>
            </IonRow>
            <IonRow style={{marginTop: 0, justifyContent: 'right', alignItems: "flex-end", color: 'gray', fontFamily: 'Arial', fontSize: '12px'}}>
                <IonText>Cannot find a class?<IonNavLink class="cl_" style={{color: 'blue'}} > Request for a class</IonNavLink></IonText>
            </IonRow>
            
                <PopularClasses handleCardPress={(cls: any) => showModal(cls)} />
                <Nearbyclasses handleCardPress={(cls: any) => showModal(cls)} />

                <IonModal id="example-modal"  
                    ref={modal}
                    isOpen={visible}
                    onWillDismiss={onWillDismiss}
                    initialBreakpoint={0.25} 
                    breakpoints={[0, 0.25, 0.5, 0.75]}
                    >
                    <div style={{justifyContent: 'center', marginTop: 20}}>
                        <div style={{textAlign: 'center', justifyContent: 'center', fontSize: 12}} > Request Enrolment</div>
                        <div style={{textAlign: 'center', marginTop: 10}}>
                            <div>
                                <IonText style={{textAlign: 'center'}}>{selectedClass?.class_title}</IonText>
                            </div>
                            <div>
                                <IonText style={{textAlign: 'center', fontSize: 12}}>{selectedClass?.location}</IonText>
                            </div>
                        </div>
                        
                            {selectedClass?.info_required?.length > 0 && <IonCardContent style={{}}>
                                <IonText style={{textAlign: 'center', fontSize: 13, color: COLORS.gray, fontFamily: 'Roboto Mono', marginTop: 5}}>{selectedClass?.institution} requests the following information:</IonText>
                                {selectedClass?.info_required?.map((d: any) =>
                                    <div style={{marginTop: SIZES.small}} key={d}>
                                        <div>
                                            <IonLabel style={{color: COLORS.dim_green, fontWeight: "800", fontSize: 13}}>{d.replace('_', ' ').replace('_', ' ')}</IonLabel>
                                        </div>
                                        <div style={{width: '100%'}}>
                                            <input style={{width: '100%'}} placeholder='' type='text' />
                                        </div>
                                    </div>
                                )}
                        </IonCardContent>
    }
                        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                        <div className="ion-padding" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <button onClick={hideModal} className='invert_button'>
                                Cancel
                            </button>
                            <button onClick={() => window.alert('Request will be sent')} className='submit_button'>
                                Submit
                            </button>
                        </div>
                    </div>
                    </IonModal>

        </IonGrid>
    )
}


export default NotEnrolled;

