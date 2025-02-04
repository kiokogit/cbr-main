import {
    IonGrid, IonText, IonRow, IonIcon,
} from "@ionic/react";
import {Card, CardBody, CardHeader} from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
import {Button} from "antd";
import {arrowForwardCircle, book, bookOutline, reload} from "ionicons/icons";
import BottomNavBar from "./BottomBarComponent";
import Icon from "antd/es/icon";

const OngoingDash = (props: any) => {

    return (
        <IonGrid fixed style={{padding: '16px'}}>
            <IonRow class="ion-justify-content-center" style={{marginTop: 5}}>
                <IonText style={{textAlign: 'center', color: 'grey', fontFamily: 'Roboto Mono', fontSize: '12px'}}>JKUATCU CBR 2025</IonText>
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
                            <CardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', display: 'flex', fontWeight: 'bold', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <div style={{width: '30px', height: '30px'}}>
                                            <IonIcon icon={reload} size={'large'} color={'tertiary'}/>
                                        </div>
                                        <div style={{}}>
                                            PROGRESS
                                        </div>

                                    </div>
                                    <div style={{alignItems: 'flex-end', textAlign: 'right'}}>
                                        <div style={{fontFamily: 'Rochester', fontSize: '32px'}}>
                                            123
                                        </div>
                                        <div style={{fontFamily: 'Roboto Mono', fontSize: '10px', fontStretch:'50%', fontWeight: '100'}}>
                                            Out of 1821 Chapters
                                        </div>
                                    </div>

                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                    <div style={{width: '60px'}}>
                                        <IonIcon size={'large'} icon={bookOutline} />
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <div>
                                            <span style={{fontFamily: 'Roboto Mono', fontStretch: '50%', fontSize: '10px', fontWeight:'100', textAlign: 'left'}}>
                                                You have read
                                            </span>
                                            <div style={{fontFamily: 'Rochester', fontSize: '64px',}}>
                                                23%
                                            </div>
                                        </div>

                                        <div style={{fontFamily: 'Roboto Mono', fontSize: '10px', textAlign: 'left', alignItems:'center', justifyContent: 'center', fontWeight:'100',}}>
                                            <p>of the whole bible</p>
                                            <p>#4 among your friends</p>
                                        </div>
                                    </div>

                                </div>
                                <div>

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
                        <CardBody style={{ height: '100%', width: '100%'}}>
                            <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', textAlign: 'left', color: 'rgba(94, 136, 101, 0.85)'}}>
                                Chapters
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', width: '80px', margin: 'auto', marginTop: '10px',  border: ' black', borderRadius: '100%', backgroundColor: 'rgba(2, 39, 8, 0.33)', color: 'white', fontFamily: 'Rochester', fontSize: '48px'}}>
                                4
                            </div>
                        </CardBody>
                    </Card>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <Card className="info_cards" style={{height: '80px'}}>
                            <CardBody>
                                <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', textAlign: 'left', color: 'rgba(94, 136, 101, 0.85)'}}>
                                    ERT
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', margin: 'auto', marginTop: '5px',  border: ' black', borderRadius: '100%', fontFamily: 'Roboto Mono', fontSize: '16px'}}>
                                    4.45am
                                </div>

                            </CardBody>
                        </Card>
                        <Card className="info_cards" style={{height: '70px'}}>
                            <CardBody>
                                <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', textAlign: 'left', color: 'rgba(94, 136, 101, 0.85)'}}>
                                    Recite
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', margin: 'auto', marginTop: '5px',  border: ' black', borderRadius: '100%', fontFamily: 'Roboto Mono', fontSize: '16px'}}>
                                    John 1:24
                                </div>
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



