import {Component, Input, OnInit} from '@angular/core';
import { Router,  ActivatedRoute, Params } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import {TrainingService} from './../../services/training.service';
import {UserService} from './../../services/user.service';

import {Training} from './../../entities/training';
import {User} from './../../entities/user';

import * as moment from 'moment';



@Component({
    selector: 'training-detail',
    templateUrl: './training-detail.component.html'
 })

export class TrainingDetail implements OnInit {

    public form:FormGroup;

    private id: string;
    private submitAttempt: boolean = false;

    constructor(
        private fb:FormBuilder,
        private _trainingService: TrainingService,
        private activeRoute: ActivatedRoute,
        private  router: Router
        ) {

        this.form = fb.group({
            '_id': [''],
            'weekday': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            'timeFrom': ['', Validators.compose([Validators.required,Validators.minLength(4)])],
            'timeTill': ['', Validators.compose([Validators.required,Validators.minLength(4)])],
            'level': ['', Validators.compose([Validators.required])],
            'trainername': ['', Validators.compose([Validators.required,Validators.minLength(4)])],
            'capacity': ['', Validators.compose([Validators.required])]
         /*   'availableFrom': ['', Validators.compose([Validators.required,Validators.minLength(6)])],
            'availableTill': ['', Validators.compose([Validators.required,Validators.minLength(6)])],
            'placeStr': ['', Validators.compose([Validators.required,Validators.minLength(4)])]*/
        });


    }

    ngOnInit() {

        this.activeRoute.params.forEach((params: Params) => {
            this.id = params['id'];

            if (this.id){
                console.log("id:"+this.id);
                this._trainingService.getTraining(this.id)
                .subscribe(training => {
                    training.timeFrom = moment(training.timeFrom).format("HH:mm");
                    training.timeTill = moment(training.timeTill).format("HH:mm");

                    (<FormGroup>this.form).patchValue(training, { onlySelf: true });
                });
            }else{
                //this.training = new Training();
            }


        });
    }

    submitForm(form: Training, isValid : boolean ): void{
        this.submitAttempt = true;
        if (isValid){
            form.timeFrom = "2000-01-01T"+form.timeFrom+":00";
            form.timeTill = "2000-01-01T"+form.timeTill+":00";
            this._trainingService.putTraining(form);
            this.router.navigate(['/pages/dashboard']);
        }
    }

    delete(){
        this._trainingService.deleteTraining(this.id).subscribe(()  =>(
            this.router.navigate(['/pages/dashboard'])
            ));
    }
}
