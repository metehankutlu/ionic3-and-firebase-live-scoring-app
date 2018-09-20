import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  macKey: string;
  evSahibi: string;
  misafir: string;
  hakem: string;
  stadyum: string;
  skor: string;
  olaylar: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.macKey = this.navParams.get('macKey');
    this.db.list('/' + this.macKey).snapshotChanges().subscribe(data => {
      //this.maclar.length = 0;
      data.map(elem => {
        //this.maclar.push(elem);
        switch(elem.key) {
            case "evSahibi":
                this.evSahibi = elem.payload.val();
                break;
            case "misafir":
                this.misafir = elem.payload.val();
                break;
            case "hakem":
                this.hakem = elem.payload.val();
                break;
            case "stadyum":
                this.stadyum = elem.payload.val();
                break;
            case "skor":
                this.skor = elem.payload.val();
                break;
            case "olaylar":
                this.olaylar = elem.payload.val();
                break;
            default: break;
        }
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
