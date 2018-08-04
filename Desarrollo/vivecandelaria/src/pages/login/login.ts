import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user ={} as User;
  toast: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private angularFireAuth:AngularFireAuth) {
  }

   // funcion de registro

   register(){
    this.navCtrl.push('RegistrerPage');
  }
  
  //funcion de coneccion 
  async login(user: User){
    try{
      const result=this.angularFireAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
      else{
        this.toast.create({
          message:'Error de usuario o contraseña ',
          duration:3000
          }).present();
      }
      }
   catch (e)
   {
     console.error(e);
   }
  }
  /*ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }*/

}
