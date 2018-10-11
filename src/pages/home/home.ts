import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnoPage } from '../uno/uno';
import { DosPage } from '../dos/dos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1=UnoPage;
  page2=DosPage;

  constructor(public navCtrl: NavController) {

  }
  clickButton(){
    this.navCtrl.push(this.page1)
  }
  clickButton2(){
    this.navCtrl.push(this.page2)
  }

}
