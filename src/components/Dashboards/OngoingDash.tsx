import {
    IonGrid, IonText, IonRow, IonIcon,
} from "@ionic/react";
import {Card, CardBody, CardHeader} from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
import {Button} from "antd";
import {arrowForwardCircle} from "ionicons/icons";
import BottomNavBar from "./BottomBarComponent";

const OngoingDash = (props: any) => {

    return (
        <IonGrid fixed style={{padding: '16px'}}>
            <IonRow class="ion-justify-content-center" style={{marginTop: 5}}>
                <IonText style={{textAlign: 'center', color: 'grey', fontFamily: 'Roboto Mono'}}>JKUATCU CBR 2025</IonText>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{ fontSize: '32px'}}>
                <IonText className="app_name_full">
                    Welcome Back!
                </IonText>
            </IonRow>
            <IonRow style={{marginTop: '16px'}}>
                <Swiper
                    style={{height: '200px', background: 'none', color: "black"}}
                    slidesPerView={1}
                    spaceBetween={16}
                    scrollbar={{ draggable: true }}
                    direction={'horizontal'}
                    loop={true}
                    effect={'fade'}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide >
                        <Card className="dash_cards gradient-1">
                            <CardBody>
                                <div>
                                    PROGRESS
                                </div>
                                <div>
                                    123
                                </div>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card className="dash_cards gradient-2">
                            <CardBody>
                                This is card TWO
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card className="dash_cards gradient-3">
                            <CardBody>
                                This is card THREE
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card className="dash_cards gradient-4">
                            <CardBody>
                                This is card THREE
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{display: 'flex', flexDirection: 'column', marginTop: '16px'}}>
                <div className="app_name_full" style={{fontSize: '20px', textAlign: 'center'}}>
                    Tomorrow's Goal
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                    <Card className="info_cards">
                        <CardBody>Chapters: 4</CardBody>
                    </Card>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <Card className="info_cards" style={{height: '80px'}}>
                            <CardBody>
                                ERT: 4.45am
                            </CardBody>
                        </Card>
                        <Card className="info_cards" style={{height: '70px'}}>
                            <CardBody>
                                RECITE: JOHN 1:24
                            </CardBody>
                        </Card>
                    </div>

                </div>

            </IonRow>
            <IonRow class="ion-justify-content-center" style={{marginTop: '16px'}}>
                <div className="app_name_full" style={{fontSize: '20px', display: 'flex', textAlign: 'left'}}>
                    Memory Verse
                </div>
                <div style={{fontSize: '12px', textAlign: 'center', color: 'rgba(94, 136, 101, 1)', marginTop: '16px'}}>
                    For God so loved the world that he gave his only begotten son, that whosoever believes in him shall not perish but have eternal life.
                </div>
                <Button
                    style={{width:'100%', backgroundColor: 'rgba(94, 136, 101, 1)', borderRadius: '100px', color: 'white', marginTop: '16px'}}
                    variant={'solid'}
                >
                    <IonIcon icon={arrowForwardCircle}> </IonIcon> Start Reading
                </Button>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{marginTop: '32px'}}>
                <Card style={{width:'100%', height: '500px', backgroundColor: 'rgba(94, 136, 101, 0.85)', borderRadius: '14px', color: 'white'}}>
                    <CardHeader>
                        RECENT ACTIVITY
                    </CardHeader>
                    <CardBody style={{backgroundColor: 'rgba(162, 194, 168, 0.94)', height: '450px', margin: '10px'}}>
                        All activity instilled here

                    </CardBody>
                </Card>
            </IonRow>

            <BottomNavBar />

        </IonGrid>
    )
}


export default OngoingDash;



