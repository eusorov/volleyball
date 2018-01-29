import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Router,  ActivatedRoute, Params } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator} from '../../theme/validators';
import { Http, Response, Headers  } from '@angular/http';

//import { RecaptchaComponent  } from 'ng2-recaptcha';


@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styles: [`
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
}`
]
})

export class Contact implements OnInit {

    //  @ViewChild (RecaptchaComponent)
    //  recaptchaComponent: RecaptchaComponent;


    public form:FormGroup;

    private submitAttempt: boolean = false;

    private headers: Headers;

    public alerts:Array<Object>  =  new Array<Object>();

    constructor(
        private fb:FormBuilder,
        private  router: Router,
        private http: Http
        ) {

        this.form = this.createForm(fb);


        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }


    createForm(fb:FormBuilder){
    return fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            'email': ['', Validators.compose([Validators.required,Validators.minLength(4), EmailValidator.validate])],
            'subject': ['', Validators.compose([Validators.required,Validators.minLength(4)])],
            'captcha': ['', Validators.compose([Validators.required])],
            'message': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

    }
    ngOnInit() {

    }

    submitForm(form: any, isValid : boolean ): void{
        this.submitAttempt = true;
        if (isValid){
            this.postTraining(form);
        }
    }

     /**
     * Send message to server
     */
     postTraining(message : any) {
         // hinzufuegen, das message wird als Array uebertragen
         let newMessage = new Array();
         newMessage.push(message);

         return this.http.post("/api/messages", JSON.stringify(newMessage),
             { headers: this.headers })
         .subscribe(
             (response: Response) => {
                 this.alerts.push({msg: 'Message successfully send', type: 'success', closable: true, dismissOnTimeout:"3000"});
                 this.submitAttempt=false;
                 this.form.reset();
                 },
             err => {console.log(err);
                 this.alerts.push({msg: 'Captcha was wrong', type: 'danger', closable: true, dismissOnTimeout:"3000"});
                //  this.recaptchaComponent.reset();
             }
             );
     }

     resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);



    }
}
