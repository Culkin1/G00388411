import { Component, OnInit } from '@angular/core';
import {NavController}from '@ionic/angular';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
openCategoriesPage(){
this.navCtrl.navigateForward('/entertainment-categories');
}
}
