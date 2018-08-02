import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsService } from '../../services/items.services';
import  { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items=[];
  constructor(public navCtrl: NavController, public itemsService:ItemsService) {
     this.items=itemsService.getItems();
  }
 public goToDetail(id){
   this.navCtrl.push(DetailPage,{id:id});
 }
}
