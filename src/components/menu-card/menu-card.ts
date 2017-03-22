import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the MenuCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'menu-card',
  templateUrl: 'menu-card.html'
})
export class MenuCardComponent {

  constructor(public appCtrl: App) {
  }        

  openPage(page) {
    if(page == 'login'){
      this.appCtrl.getRootNav().setRoot(LoginPage);
    } else {
      //this.nav.setRoot(SignupPage);
    }    
  }

}
