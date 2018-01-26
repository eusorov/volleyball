import {Component, OnInit, Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import {Router } from '@angular/router';

import {TrainingService} from './../../../services/training.service';
import {UserService} from './../../../services/user.service';

import {Training} from './../../../entities/training';
import {User} from './../../../entities/user';

@Component({
    selector: 'trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['./trainings.component.scss'],
    animations: [
    trigger('fadeIn', [
        state('*', style({'opacity': 1})),
        transition('void => *', [
            style({'opacity': 0}),
            animate('800ms linear')
            ])
        ]),
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
            style({transform: 'translateX(-20%)'}),
            animate(500)
            ])
    ])
    ]

})

export class TrainingsComponent implements OnInit {
    private trainings: Training[];
    private selectedTraining: Training;

    private errorObj: any;
    private errorMessage: string;

    constructor(
        private _trainingService: TrainingService,
        private userService: UserService,
        private _router: Router
        ) { }

    getTrainings() {
        this._trainingService.getTrainings().subscribe(trainings => this.trainings = trainings,
            error =>  {
                this.errorObj = <any>error ;
                if (this.errorObj.status === 0){
                    this.errorMessage = "Server is timedout, no connection";
                }
            });


    }

    ngOnInit() {
        this.getTrainings();
    }

    onSelect(training: Training) {
        this.selectedTraining = training;
        training.showParticipants = training.showParticipants == true? false: true;
    }

    gotoDetail(id: string) {
        this._router.navigate(['/pages/training', id]);
    }

    userIsAlreadySigned(training: Training){
        if (!this.userService.user){
            return false;
        }
        return training.participants.some( participant => {
            if (participant && participant.email == this.userService.user.email) return true;
        });
    }

    signingToCourse(training: Training){
        if (this.userService.user){
            this._trainingService.putParticipantToTraining(training._id, this.userService.user.name, this.userService.user.email).
            subscribe((res) => {
                if (res.status === 201){

                    // um doppelte Eintrage in participants zu vermeiden
                    if (!this.userIsAlreadySigned(training)){
                        // fuegen wir neuen Teilnehmer hinzu.
                        training.participants.push({_id:'', name: this.userService.user.name, email: this.userService.user.email});
                    }
                }
            },
            error =>  {
                this.errorObj = <any>error ;
                if (this.errorObj.status === 0){
                    this.errorMessage = "Server is timedout, no connection";
                }
            });
        }
    }

    deleteParticipant(training_id: string, participant_id: string, index: number){
         console.log(training_id,participant_id, index);

         this._trainingService.deleteParticipant(training_id,participant_id).
            subscribe((res) => {
                 if (res.status === 200){
                        console.log("deleted");
                         this.selectedTraining.participants.splice(index, 1);

                 }
            });
    }
}
