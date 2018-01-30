import {Injectable} from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Observer }       from 'rxjs/Observer';

import {Training} from './../entities/training';
import {Participant} from './../entities/participant';

import {TRAININGS} from './mock-training';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';


@Injectable()
export class TrainingService {

    private headers: Headers;
    private trainings: Training[];

    constructor (private http: Http) {

     this.headers = new Headers();
     this.headers.append('Content-Type', 'application/json');

    }


    private trainingsUrl = '/api/trainings';  // URL to web API

    getTrainingsMock() : Observable<Training[]> {
        let trainings = new Array(1);
        trainings[0] = TRAININGS;
        return Observable.from(trainings);
    }

    getTrainings (): Observable<Training[]> {
        return this.http.get(this.trainingsUrl)
                    .map(this.extractData);
    }

    getMyTrainings (email: string): Observable<Training[]> {
        return this.http.get(this.trainingsUrl+'/me')
                    .map(this.extractData);
    }

   private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
   }

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

    // See the "Take it slow" appendix
    getTrainingsSlowly() {
        return new Promise<Training[]>(resolve =>
            setTimeout(() => resolve(TRAININGS), 2000) // 2 seconds
            );
    }

    getTraining(id: string) : Observable<Training> {
        console.log("Aufruf von "+this.trainingsUrl+"/"+id);
         return this.http.get(this.trainingsUrl+"/"+id)
                    .map(this.extractData);
    }

    /**
     * PUT = Aendern, wenn ID vorhanden ist, oder neu Hinzufuegen wenn noch keine ID vorhanden ist
     */
    putTraining(training: Training) {
        console.log(training._id);
        if (training._id && training._id.length>0 ){
             return this.http.put(this.trainingsUrl+"/"+training._id, JSON.stringify(training),
               { headers: this.headers })
               .subscribe( () => console.log('POST/PUT Complete'));
        }else{
         // hinzufuegen, das Training wird als Array uebertragen
         delete training._id;
         let newTrainings = new Array<Training>();
         newTrainings.push(training);


        return this.http.post(this.trainingsUrl, JSON.stringify(newTrainings),
               { headers: this.headers })
               .subscribe( () => console.log('POST/PUT Complete'));
        }
    }
    /**
     * add participant to training
     */
    putParticipantToTraining(_id: string, username: string, email: string) {
        if (_id){
            let participants = new Array<Participant>();
            participants.push({_id : '', name : username, email : email});

            return this.http.post(this.trainingsUrl+"/"+_id+"/participants", JSON.stringify(participants),
               { headers: this.headers });
        }
    }

    deleteTraining(_id: string) {
        console.log(_id);
        if (_id){
            console.log(_id);
            return this.http.delete(this.trainingsUrl+"/"+_id, { headers: this.headers });
        }
    }

     deleteParticipant(training_id: string, participant_id: string) {
        if (training_id){
            console.log(training_id,participant_id);
            return this.http.delete(this.trainingsUrl+"/"+training_id+"/participants/"+participant_id, { headers: this.headers });
        }
    }
}
