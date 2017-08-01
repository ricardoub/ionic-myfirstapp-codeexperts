import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Autenticado',
      subTitle: 'Você está autenticado agora.',
      buttons: ['OK']
    });
    alert.present();
  }

}
