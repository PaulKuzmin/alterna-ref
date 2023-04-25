import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController, IonicModule, NavController} from '@ionic/angular';
import {ResultServiceService} from "../../services/result.service.service";

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.page.html',
  styleUrls: ['./calc-result.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalcResultPage implements OnInit {
  data: any;
  currencies: any = [];
  calcCurrs: any = "rubles";

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public result: ResultServiceService
  ) {
    //this.data = this.navParams.get("data");
    this.data = this.result.calcResult;
    console.log(this.data);

    for (let key in this.data.calculation.currencies) {
      this.currencies.push(this.data.calculation.currencies[key]);
    }
  }

  ngOnInit() {
  }

  showRateHint(taxName: string, rate: any) {
    this.alertCtrl.create({
      header: taxName,
      message: 'Ставка: ' + rate,
      buttons: ['OK']
    }).then(a => a.present);
  }

  requestClick() {
    /*
    let message = '';
    if (this.data && this.data.hasOwnProperty('chosen') && this.data.chosen) {
      message = 'Здравствуйте! Рассчитайте, пожалуйста: ' + this.data.chosen.code;

      if (this.data.chosen.direction == 'E') {
        message += '; направление перемещения: экспорт';
      } else {
        message += '; направление перемещения: импорт';
      }

      if (this.data.chosen.country && this.data.chosen.country != '000') {
        message += '; код страны: ' + this.data.chosen.country;
      }

      message += '; стоимость, дол.США: ' + this.data.chosen.param_cost;
    }

    this.navCtrl.push(RequestPage, {message: message});
    */

    this.navCtrl.navigateForward(['/tabs/alternaTab']);
  }
}

