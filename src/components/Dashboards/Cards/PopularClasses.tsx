import { useState } from "react";
import { IonGrid, IonRow, IonCol, IonicSlides, IonSpinner, IonText } from "@ionic/react";
import { COLORS, SIZES } from "../../../constants";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import PopularClassCard from './PopularClassCard';

const PopularClasses = (props: any) => {
  
const data = [
  {
      id: 1,
      class_title: "JKUATCU CBR 2025",
      start_date: "2025-01-6",
      institution: "JKUATCU",
      location:"Juja",
      moderator: "M Mike",
      coordinator: "Gichuki",
      info_required: ["course_name", "year_of_study", "hostel/residence"]
  },
  {
      id: 2,
      class_title: "Community baptist Church",
      start_date: "2025-01-6",
      institution: "CBC Ruiru",
      location:"Ruiru",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: ["residence"]
  },
  {
      id: 3,
      class_title: "Garrissa Situation",
      start_date: "2025-01-6",
      institution: "Garissa Primary",
      location:"Hola",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: ["ethnic_affiliation"]
  },
  {
      id: 4,
      class_title: "Hola College",
      start_date: "2025-01-6",
      institution: "NHFANc",
      location:"Tana River",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: []
  },
  {
      id: 5,
      class_title: "React Native",
      start_date: "2025-01-6",
      institution: "JKUATCU",
      location:"Juja",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: []
  },
  {
      id: 6,
      class_title: "Community baptist Church",
      start_date: "2025-01-6",
      institution: "CBC Ruiru",
      location:"Ruiru",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: []
  },
  {
      id: 7,
      class_title: "React Native",
      start_date: "2025-01-6",
      institution: "JKUATCU",
      location:"Juja",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: []
  },
  {
      id: 8,
      class_title: "Community baptist Church",
      start_date: "2025-01-6",
      institution: "CBC Ruiru",
      location:"Ruiru",
      moderator: "John Doe",
      coordinator: "Gichuki",
      info_required: []
  }
]
  const isLoading = false
  const error = false

  const [selectedJob, setSelectedJob] = useState();

  return (
    <IonGrid fixed>
      <IonRow>
        <IonText style={{color: COLORS.dim_green, fontSize: 14}}>Popular Classes</IonText>
      </IonRow>

      <IonRow class="ion-justify-content-center">
        {isLoading ? (
          <IonSpinner style={{marginTop: 20}} name="circles"></IonSpinner>
    
        ) : error ? (
          <IonText style={{marginTop: 20, color: COLORS.gray, fontSize: SIZES.small}}>Something went wrong!</IonText>
        ) : (
          <Swiper 
            style={{height: 'fit-content', background: 'none'}}
            slidesPerView={2}
            scrollbar={{ draggable: true }}
            >
            {data?.map((item: any) => (
              <SwiperSlide key={item.id}>
                <PopularClassCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={props.handleCardPress}
                />
              </SwiperSlide>
            ))}
            
          </Swiper>
        )}
      </IonRow>
    </IonGrid>
  );
};

export default PopularClasses;



