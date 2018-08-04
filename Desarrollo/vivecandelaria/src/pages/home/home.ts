
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('map')mapRef:ElementRef;
 map:any;

  latitud:any;
  longitud:any;
  constructor(public navCtrl: NavController,private toast:ToastController, private angularFireAuth:AngularFireAuth,private platform: Platform , private geolocation: Geolocation) {
    platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.latitud=pos.coords.latitude;
        this.longitud= pos.coords.longitude;
        this.showMap();
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log(pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });



    }
  ionViewDidLoad(){
      this.angularFireAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.toast.create({
          message:'Bienvenido'+data.email,
          duration:3000,
          position:'top',
          }).present();
        }
        console.log(data)
    })
  }
  
  showMap(){
    const location=new google.maps.LatLng(this.latitud, this.longitud);
    const options = {
      center: location,
      zoom: 15,
      mapTypeId: 'roadmap',
    }
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,this.map);
  }
  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }
   
}
/*
<div id="map"></div>
<script>
var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}*/