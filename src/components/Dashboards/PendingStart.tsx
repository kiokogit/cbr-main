
import { formatDistanceToNow } from 'date-fns';
import { COLORS, SIZES } from "../../constants";
import { IonGrid, IonRow, IonText } from '@ionic/react';


const PendingStart = (props: any) => {

    const convertToRelativeTime = (dateString: string) => {
        const date = new Date(dateString);
        try {
            return formatDistanceToNow(date, { addSuffix: false }).split(' ');
        } catch (error) {
            console.log(error)
            return ['0', 'seconds']
        }
    };


    return (
        <IonGrid fixed>
            <IonRow style={{marginTop: 20}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'Roboto Mono'}}>CBR 2025</IonText>

            </IonRow>
            <IonRow style={{marginTop: 70, fontSize: '10px'}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'Roboto Mono'}}>Your request has been approved.</IonText>
            </IonRow>
            <IonRow style={{ fontSize: '10px'}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'Roboto Mono'}}> You are Enrolled to:</IonText>

            </IonRow>
            <IonRow style={{marginTop: 30, marginBottom: 30}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', fontSize: SIZES.xLarge, fontFamily: 'Arial', fontWeight: 900, color: 'rgba(144, 11, 9, 1)'}}>{props.cbr.class_title}</IonText>
            </IonRow>

            <IonRow style={{marginTop: 10}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', color: COLORS.dim_green, margin: 20, fontFamily: 'Roboto Mono'}}>Class Starts in: </IonText>
            </IonRow>
            <IonRow class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', fontFamily: 'Arial', fontWeight: 900, fontSize: 64, color: COLORS.dim_green}}>{convertToRelativeTime(props.cbr.start_date).at(-2)}</IonText>
            </IonRow>
            <IonRow class="ion-justify-content-center" style={{ marginBottom: 30}}>
                <IonText style={{textAlign: 'center', color: COLORS.dim_green, fontFamily: 'Arial', fontWeight: 900, fontSize: 20,}}>{convertToRelativeTime(props.cbr.start_date).at(-1)}</IonText>
            </IonRow>

            <IonRow style={{marginTop: 10, marginBottom: 30}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', fontSize: SIZES.xxLarge, fontWeight: "900", color: COLORS.jungle_green}}>Awaiting Class to Start</IonText>

            </IonRow>
            <IonRow style={{marginTop: 30, marginBottom: 30}} class="ion-justify-content-center">
                <IonText style={{textAlign: 'center', color: COLORS.gray, fontSize: '10px', fontFamily: 'Roboto Mono'}}>Meanwhile, Ensure you attend the first lesson to have your app classes started by the Moderator.</IonText>

            </IonRow>
        </IonGrid>
    )
}


export default PendingStart;

