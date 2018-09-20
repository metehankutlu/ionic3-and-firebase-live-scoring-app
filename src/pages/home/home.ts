import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  maclar: object[] = [];
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.db.list('/').snapshotChanges().subscribe(data => {
      this.maclar.length = 0;
      data.map(elem => {
        this.maclar.push(elem);
      })
    });
  }
  itemSelected(mac){
    this.navCtrl.push(DetailsPage, {
      macKey: mac.key
    });
  }
}
