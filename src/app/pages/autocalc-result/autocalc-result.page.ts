import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController, IonicModule, NavController} from '@ionic/angular';
import {ResultServiceService} from "../../services/result.service.service";

@Component({
  selector: 'app-autocalc-result',
  templateUrl: './autocalc-result.page.html',
  styleUrls: ['./autocalc-result.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AutocalcResultPage implements OnInit {

  data: any;
  currencies: any = [];
  calcCurrs: any = "rubles";

  constructor(
    public navCtrl: NavController,
    public result: ResultServiceService,
    public alertCtrl: AlertController
  ) {
    this.data = this.result.autoCalcResult;

    for (let key in this.data.calculation.currencies) {
      this.currencies.push(this.data.calculation.currencies[key]);
    }
  }

  showRateHint(taxName: string, rate: any) {
    this.alertCtrl.create({
      header: taxName,
      message: 'Ставка: ' + rate,
      buttons: ['OK']
    }).then(alert => {
      alert.present();
    });

  }

  ngOnInit() {
  }

  requestClick() {
    this.navCtrl.navigateForward(['/tabs/alternaTab']);
    /*
    let message = '';
    if (this.data && this.data.hasOwnProperty("chosen") && this.data.chosen) {
      //console.log(this.data.chosen);

      let engines = {
        f: 'бензиновый',
        d: 'дизельный',
        h: 'гибридный',
        e: 'электрический'
      }

      let vehicles = {
        car: 'ЛЕГКОВОЙ',
        cargo: 'ГРУЗОВОЙ',
        bus: 'АВТОБУС',
        bike: 'МОТОЦИКЛ/МОПЕД',
        tractor: 'ТЯГАЧ',
        crane: 'АВТОКРАН',
        quadrocicle: 'КВАДРОЦИКЛ',
        concretemixer: 'БЕТОНОМЕШАЛКА',
        driving: 'АВТОБУРОВАЯ',
        evacuator: 'ЭВАКУАТОР',
        concretepump: 'БЕТОНОНАСОС',
        snowmobile: 'СНЕГОХОД',
        caravan: 'АВТОПРИЦЕП',
        house: 'ДОМ-АВТОПРИЦЕП',
        waterbike: 'ВОДНЫЙ МОТОЦИКЛ',
        boat: 'КАТЕР (ЯХТА,ЛОДКА)'
      }

      message = 'Здравствуйте! Рассчитайте, пожалуйста:' +
        ' тип авто: ' + vehicles[this.data.chosen.vehicle] +
        '; дата выпуска: ' + this.data.chosen.month + '.' + this.data.chosen.year +
        '; двигатель: ' + engines[this.data.chosen.engine];

      if (this.data.chosen.weight) {
        message += '; полный вес, кг: ' + this.data.chosen.weight;
      }

      if (this.data.chosen.seats) {
        message += '; количество мест: ' + this.data.chosen.seats;
      }

      if (this.data.chosen.bag) {
        message += '; объем баг.отделения, куб.см.: ' + this.data.chosen.bag;
      }

      if (this.data.chosen.capacity) {
        message += '; объем двигателя, куб.см.: ' + this.data.chosen.capacity;
      }

      if (this.data.chosen.power) {
        message += '; мощность, л.с.: ' + this.data.chosen.power;
      }

      if (this.data.chosen.cost) {
        message += '; стоимость, дол.США: ' + this.data.chosen.cost;
      }

      //console.log(message);
    }
    this.navCtrl.push(RequestPage, {message: message});
     */
  }
}
