import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, NavController} from '@ionic/angular';
import {AutocalcApiService} from "../../services/autocalc.api.service";
import {ResultServiceService} from "../../services/result.service.service";

@Component({
  selector: 'app-autocalc',
  templateUrl: './autocalc.page.html',
  styleUrls: ['./autocalc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AutocalcPage implements OnInit {

  months = [
    {id: 1, name: "Январь"},
    {id: 2, name: "Февраль"},
    {id: 3, name: "Март"},
    {id: 4, name: "Апрель"},
    {id: 5, name: "Май"},
    {id: 6, name: "Июнь"},
    {id: 7, name: "Июль"},
    {id: 8, name: "Август"},
    {id: 9, name: "Сентябрь"},
    {id: 10, name: "Октябрь"},
    {id: 11, name: "Ноябрь"},
    {id: 12, name: "Декабрь"},
  ];
  years: number[] = [];
  calcParams: any;
  chosenParams: any = {
    vehicle: "car",
    month: 1,
    year: 2023,
    cost: ""
  };

  constructor(
    public navCtrl: NavController,
    public autoCalcSource: AutocalcApiService,
    public result: ResultServiceService
  ) {
    this.chosenParams.year = new Date().getFullYear();

    for (let i = this.chosenParams.year; i > (this.chosenParams.year - 10); i--) {
      let y = i as number;
      this.years.push(y);
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getParams();
  }

  getParams() {
    this.autoCalcSource.getParams(this.chosenParams.vehicle, this.chosenParams)
      .subscribe(
        data => {
          this.calcParams = data.data;
          for (var i = 0; i < this.calcParams.calc_params.length; i++) {
            if (!this.chosenParams[this.calcParams.calc_params[i].code]) {
              if (this.calcParams.calc_params[i].code == "engine") {
                this.chosenParams[this.calcParams.calc_params[i].code] = "f";
              } else {
                this.chosenParams[this.calcParams.calc_params[i].code] = "";
              }
            }
          }
        });
  }

  calcClick() {
    this.autoCalcSource.getCalc(this.chosenParams.vehicle, this.chosenParams)
      .subscribe(
        data => {
          //console.log(data);
          if (data.success) {
            if ((data.data.calculation.hasOwnProperty("F") && data.data.calculation.F.hasOwnProperty("success") && data.data.calculation.F.success) ||
              (data.data.calculation.U.hasOwnProperty("success") && data.data.calculation.U.success)) {
              this.result.autoCalcResult = data.data;
              this.navCtrl.navigateForward(['/autocalc-result']);
            } else {
              let msg = '';
              if (data.data.calculation.hasOwnProperty("F") && data.data.calculation.F.hasOwnProperty("success")) {
                for (var i = 0; i < data.data.calculation.F.messages.length; i++) {
                  msg += data.data.calculation.F.messages[i].message + '<br>';
                }
              }

              if (data.data.calculation.U.hasOwnProperty("success")) {
                for (var i = 0; i < data.data.calculation.U.messages.length; i++) {
                  msg += data.data.calculation.U.messages[i].message + '<br>';
                }
              }

              // TODO: ERROR handling
              console.log(msg);
              /*
              let alert = this.alertCtrl.create({
                title: 'Ошибка',
                subTitle: msg,
                buttons: ['OK']
              });
              alert.present();
               */
            }
          } else {

          }
        });
  }
}
