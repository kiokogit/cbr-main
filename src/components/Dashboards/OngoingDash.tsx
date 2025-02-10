import {
    IonGrid, IonText, IonRow, IonIcon,
} from "@ionic/react";
import {Card, CardBody, CardHeader, Image} from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
import {Button} from "antd";
import BottomNavBar from "./BottomBarComponent";
import {chevronForward} from "ionicons/icons";
import progressIcon from '../../assets/icons/progress_circle.png'
import openBookIcon from '../../assets/icons/openbook.png'
import activityIcon from '../../assets/icons/activity.png'
import {PageIndicator} from 'antd-mobile'
import React from 'react';
import { Timeline } from 'antd';


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
                    style={{height: '200px', background: 'none', color: "red"}}
                    slidesPerView={1}
                    spaceBetween={16}
                    scrollbar={{ draggable: true }}
                    direction={'horizontal'}
                    loop={true}
                    effect={'fade'}
                    pagination={true}
                >
                    <SwiperSlide >
                        <Card className="dash_cards gradient-1">
                            <CardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', display: 'flex', fontWeight: 'bold', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <img src={progressIcon} style={{width: '40px', height: '40px'}} alt={'progress'} />
                                        <p style={{}}>
                                            PROGRESS
                                        </p>

                                    </div>
                                    <div style={{alignItems: 'flex-end', textAlign: 'right'}}>
                                        <div style={{fontFamily: 'Rochester', fontSize: '32px'}}>
                                            123
                                        </div>
                                        <div style={{fontFamily: 'Roboto', fontSize: '10px', fontStretch:'50%', fontWeight: '100'}}>
                                            Out of 1821 Chapters
                                        </div>
                                    </div>

                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div style={{width: '60px'}}>
                                        <img src={openBookIcon} alt={'book open'} style={{width: '67px', height: '59px'}} />
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <div>
                                            {/*<span style={{fontFamily: 'Roboto Mono', fontStretch: '50%', fontSize: '10px', fontWeight:'100', textAlign: 'left'}}>*/}
                                            {/*    You have read*/}
                                            {/*</span>*/}
                                            <div style={{fontFamily: 'Rochester', fontSize: '64px', display:'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
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
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <PageIndicator
                        total={4}
                        current={1}
                        style={{

                            '--dot-color': 'rgba(94, 136, 101, 0.3)',
                            '--active-dot-color': 'rgba(94, 136, 101, 1)',
                            '--dot-size': '8px',
                            '--active-dot-size': '8px',
                            '--dot-border-radius': '50%',
                            '--active-dot-border-radius': '15px',
                            '--dot-spacing': '8px',
                        }}
                    />
                </div>

            </IonRow>
            <IonRow class="ion-justify-content-center" style={{display: 'flex', flexDirection: 'column', marginTop: '16px'}}>
                <div className="app_name_full" style={{fontSize: '20px', textAlign: 'center', color: 'rgba(2, 39, 8, 0.85)'}}>
                    Tomorrow's Goal
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                    <Card className="info_cards">
                        <CardBody style={{ height: '100%', width: '100%'}}>
                            <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', textAlign: 'left', color: 'rgba(94, 136, 101, 0.85)'}}>
                                Chapters
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', width: '80px', margin: 'auto', marginTop: '10px', borderRadius: '100%', backgroundColor: 'rgba(94, 136, 101, 0.85)'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px', width: '70px', marginTop: '5px', marginLeft:'-5px', borderRadius: '100%', backgroundColor: 'rgba(2, 39, 8, 0.33)', color: 'white', fontFamily: 'Rochester', fontSize: '48px'}}>
                                    4
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <Card className="info_cards" style={{height: '80px'}}>
                            <CardBody>
                                <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', textAlign: 'left', color: 'rgba(94, 136, 101, 0.85)'}}>
                                    ERT
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', margin: 'auto', marginTop: '5px', color: 'rgba(2, 39, 8, 0.85)', borderRadius: '100%', fontFamily: 'Roboto Mono', fontSize: '16px'}}>
                                    4.45am
                                </div>

                            </CardBody>
                        </Card>
                        <Card className="info_cards" style={{height: '70px'}}>
                            <CardBody>
                                <div style={{fontFamily: 'Roboto Mono', fontSize: '12px', textAlign: 'left', color: 'rgba(94, 136, 101, 0.85)'}}>
                                    Recite
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', margin: 'auto', marginTop: '5px', color: 'rgba(2, 39, 8, 0.85)', borderRadius: '100%', fontFamily: 'Roboto Mono', fontSize: '16px'}}>
                                    John 1:24
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                </div>

            </IonRow>
            <IonRow class="ion-justify-content-center" style={{marginTop: '16px'}}>
                <div className="app_name_full" style={{fontSize: '20px', textAlign: 'left', color: 'rgba(2, 39, 8, 0.85)'}}>
                    Memory Verse
                </div>
                <div style={{fontSize: '12px', textAlign: 'center', color: 'rgba(94, 136, 101, 1)', marginTop: '12px', fontWeight: 'bold'}}>
                    For God so loved the world that he gave his only begotten son, that whosoever believes in him shall not perish but have eternal life.
                </div>
                <Button
                    style={{width:'100%', backgroundColor: 'rgba(94, 136, 101, 1)', borderRadius: '100px', color: 'white', marginTop: '16px', fontWeight: '400'}}
                    variant={'solid'}
                    size={'large'}
                >
                    <IonIcon icon={chevronForward}> </IonIcon> Start Reading
                </Button>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{marginTop: '32px'}}>
                <Card style={{width:'100%', height: 'fit-content', backgroundColor: 'rgba(94, 136, 101, 0.85)', borderRadius: '14px', color: 'white', padding: '10px'}}>
                    <CardHeader style={{height: '30px', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <img src={activityIcon} style={{width: '18px', height: '18px'}} alt={'progress'} />
                            <div style={{marginLeft: '10px', fontWeight: '500', fontFamily: 'Roboto Mono', fontSize: '12px'}}>
                                RECENT ACTIVITY
                            </div>
                        </div>

                    </CardHeader>
                    <CardBody style={{backgroundColor: 'rgba(91, 118, 95, 0.94)', margin: '0px', padding: '15px', borderRadius: '10px'}}>
                        <Timeline
                            mode="right"
                            style={{color: 'white', fontSize: '9px'}}
                            items={[
                                {
                                    children: <div className={'timeline_cards'}> Creaste a services site 2015-09-01 </div>,
                                    color: 'rgba(217, 217, 217, 1)',
                                    label: '2015-09-01',
                                },
                                {
                                    children: <div className={'timeline_cards'}> Solve initial network problems 2015-09-01' </div>,
                                    color: 'rgba(217, 217, 217, 1)',
                                    label: '2015-09-01',
                                },
                                {
                                    children: <div className={'timeline_cards'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium </div>,
                                    color: 'rgba(217, 217, 217, 1)',
                                    label: '2015-09-01',
                                },
                                {
                                    color: 'rgba(217, 217, 217, 1)',
                                    children: <div className={'timeline_cards'}> Network problems being solved 2015-09-01 </div>,
                                    label: '2015-09-01',
                                },
                                {
                                    children: <div className={'timeline_cards'}> Create a services site 2015-09-01 </div>,
                                    color: 'rgba(217, 217, 217, 1)',
                                    label: '2015-09-01',
                                },
                                {
                                    children: <div className={'timeline_cards'}> Technical testing 2015-09-01 </div>,
                                    color: 'rgba(217, 217, 217, 1)',
                                    label: '2015-09-01',
                                },
                            ]}
                        />

                    </CardBody>
                </Card>
            </IonRow>

            <BottomNavBar />

        </IonGrid>
    )
}


export default OngoingDash;

