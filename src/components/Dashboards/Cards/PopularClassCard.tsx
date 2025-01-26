import {IonCard, IonText, IonCardContent, IonCardHeader} from "@ionic/react";


const PopularClassCard = (props: any) => {
  return (
    <IonCard
      style={{backgroundColor: 'rgba(2, 39, 8, 0.85)', textAlign: 'left', width: '175px', borderRadius: '15px'}}
      onClick={() => props.handleCardPress(props.item)}
    >
      <IonCardHeader>
        <IonText style={{color: 'gray', fontSize: '12px'}}>
          {props.item.location}
        </IonText>
      </IonCardHeader>
    
      <IonCardContent>
        <IonText style={{color: 'white', fontSize: '14px'}}>
          {props.item.institution}
        </IonText>
        <div style={{}}>
          <IonText style={{color: 'white', fontSize: '10px'}}>
            {props.item.start_date} -
          </IonText>
          <IonText style={{color: 'gray', fontSize: '10px'}}> {"2pm"}</IonText>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default PopularClassCard;