        
import {IonCard, IonImg, IonText, IonCardContent, IonCardHeader, IonGrid, IonCol, IonRow} from "@ionic/react";
import { COLORS, SIZES } from "../../../constants";


const NearbyClassCard = (props: any) => {
  return (
    <div className="cl_" style={{backgroundColor: 'white', width: '100%', padding: '4px', borderRadius: '8px', display: 'flex', flexDirection: 'row'}} onClick={props.handleCardPress}>
        <div style={{width: 50, height: 50, backgroundColor: COLORS.jungle_green, borderRadius: SIZES.medium, justifyContent: "center", alignItems: "center",}}>
          <img
            src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
          />
        </div>
        <div>
          <div style={{marginLeft: 10}}>
            <div>
              <IonText style={{fontSize: 14, color: COLORS.jungle_green}}>
                {props?.cls?.class_title}
              </IonText>
            </div>
            <div>
              <IonText style={{fontSize: 10, color: COLORS.gray}}>
                {props?.cls?.institution} - {props?.cls?.location}
              </IonText>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NearbyClassCard;