import { useState } from "react";
import { IonGrid, IonRow, IonSpinner, IonText } from "@ionic/react";
import NearbyClassCard from "./NearbyClassCard"
import { COLORS, SIZES } from "../../../constants";

const Nearbyclasses = (props: any) => {
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
        <IonText style={{color: COLORS.dim_green, fontSize: 14}}>Nearby Classes</IonText>
      </IonRow>

      <IonRow class="ion-justify-content-center" style={{marginTop: 16, gap: 10}}>
        {isLoading ? (
          <IonSpinner style={{marginTop: 20}} name="circles"></IonSpinner>
    
        ) : error ? (
          <IonText style={{marginTop: 20, color: COLORS.gray, fontSize: SIZES.small}}>Something went wrong!</IonText>
        ) : (
          data?.map((item: any) => (
            <NearbyClassCard
              key={item.id}
              cls={item}
              handleCardPress={() => props.handleCardPress(item)}
            />
          ))
        )}
      </IonRow>
    </IonGrid>
  );
};

export default Nearbyclasses;