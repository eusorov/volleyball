import {Participant} from './participant';
/**
 */
export class Training {
    _id: string;
    weekday: string;
    timeFrom: string;
    timeTill: string;
    timeFromHour: number;
    timeFromMinute: number;
    timeTillHour: number;
    timeTillMinute: number;
	level: string;
	trainername: string;
	capacity: number;
    availableFrom: string;
    availableTill: string;
    placeStr: string;
    showParticipants: boolean;
    
	participants : Participant[]; 
}