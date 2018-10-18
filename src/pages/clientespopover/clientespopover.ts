import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ClientespopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientespopover',
  templateUrl: 'clientespopover.html',
})
export class ClientespopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
	 
	 }
  close(item) {

	this.viewCtrl.dismiss(item);
	
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientespopoverPage');
  }

}
