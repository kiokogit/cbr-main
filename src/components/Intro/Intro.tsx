import { IonButton, IonIcon, IonText } from '@ionic/react';
import React from 'react';
import {arrowForwardCircleOutline } from 'ionicons/icons'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro2Svg from '../../assets/intro/2.svg';
import Intro3Svg from '../../assets/intro/3.svg';
import './Intro.css';

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton className="get_started_btn" size='small' color={"tertiary"} onClick={() => swiper.slideNext()}><IonIcon slot="icon-only" icon={arrowForwardCircleOutline} ></IonIcon></IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        {/* <img src={Intro1Svg} alt="Intro 1" /> */}
        <IonText className='app_name'>
          C.B.R
        </IonText>
        <IonText className="app_name_full">
          Consistent Bible Reading
        </IonText>
        <IonText className='app_main_slogan'>
          The hard way to build discipline in Fellowship with God
        </IonText>
        <SwiperButtonNext >Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText className='titles_content'>
          Get Started with your Devotion Tracking and Recording
        </IonText>
        <IonText className='content_ps'>
          CBR App helps you track your deviation from your set discipline for the duration of the courses and beyond.
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText className='titles_content'>
          Build a Lasting Discipline in Bible Reading and Prayer
        </IonText>
        <IonText className='content_ps'>
          We fail to maintain discipline because we do not track the successes and the failures. Recording and rewarding yourself will entrench the discipline of reading the bible daily and consistently.
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText className='titles_content'>
          Get started today!
        </IonText>
        <IonButton className="get_started_btn" size='small' color={"tertiary"} onClick={() => onFinish()}>Get Started</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;

