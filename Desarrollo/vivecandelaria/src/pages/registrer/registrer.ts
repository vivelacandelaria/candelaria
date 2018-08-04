import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegistrerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrer',
  templateUrl: 'registrer.html',
})
export class RegistrerPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private angularFireAuth: AngularFireAuth) {
  }

  //funcion de coneccion 
  async register(user: User){
    try{
      const result=this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
      }
   catch (e)
   {
     console.error(e);
   }
  }
  
  }