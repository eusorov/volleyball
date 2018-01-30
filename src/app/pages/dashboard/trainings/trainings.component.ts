import {Component, OnInit, Input,

} from '@angular/core';
import {Router } from '@angular/router';

import {TrainingService} from './../../../services/training.service';
import {UserService} from './../../../services/user.service';

import {Training} from './../../../entities/training';
import {User} from './../../../entities/user';

import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';

@Component({
    selector: 'trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['./trainings.component.scss'],
    animations: [
    trigger('fadeInOut', [
        state('out', style({transform: 'translateX(0) scale(1)'})),
        transition(':enter', [
            style({'opacity': 0}),
            animate('800ms linear')
          ]),
        transition(':leave', [
              style({'opacity': 1}),
              animate('800ms linear')
              ])

        ]),
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
            style({transform: 'translateX(-20%)'}),
            animate(500)
          ]),
          transition('* => void', [
            animate(300, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('shrinkOut', [
        state('in', style({height: '*'})),
        transition('* => void', [
          style({height: '*'}),
          animate(250, style({height: 0}))
        ])
      ]),

    trigger('listAnimationWithKeyframes', [
      transition(':enter', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(5px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('listAnimation', [ // from angular io documentation
      transition(':enter', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger('100ms', [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], {optional: true})
      ])
    ])

    ]

})

export class TrainingsComponent implements OnInit {
    public trainings: Training[];
    private selectedTraining: Training;

    private errorObj: any;
    private errorMessage: string;

    constructor(
        private _trainingService: TrainingService,
        public _userService: UserService,
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
        if (!this._userService.user){
            return false;
        }
        return training.participants.some( participant => {
            if (participant && participant.email == this._userService.user.email) return true;
        });
    }

    signingToCourse(training: Training){
        if (this._userService.user){
            this._trainingService.putParticipantToTraining(training._id, this._userService.user.name, this._userService.user.email).
            subscribe((res) => {
                if (res.status === 201){

                    // um doppelte Eintrage in participants zu vermeiden
                    if (!this.userIsAlreadySigned(training)){
                        // fuegen wir neuen Teilnehmer hinzu.
                        training.participants.push({_id:'', name: this._userService.user.name, email: this._userService.user.email});
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
                        console.log(participant_id+"deleted");
                        let training = this.trainings.filter(function(training){
                          return training._id === training_id;
                        });
                        training[0].participants.splice(index, 1);
                 }
            });

    }
}
