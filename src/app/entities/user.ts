export class User {
	name: string;
  username: string;
  profile_picture: string;
  last_active: number;
  email: string;
  password: string;
  access_token: string;
  access_token_secret : string;
  refresh_token   : string;
  provider : string;
  groups : [{ name: string}];
  isadmin : boolean;

  constructor(
    private _email: string,
    private _password: string) {
  	 	this.email = _email;
  	 	this.password = _password;
     }
}
