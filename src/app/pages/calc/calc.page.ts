import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController, IonicModule, NavController} from '@ionic/angular';
import {CalcApiService} from "../../services/calc.api.service";
import {ActivatedRoute} from "@angular/router";
import {ResultServiceService} from "../../services/result.service.service";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalcPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  searchTerm: string = '';//'2402209000';
  params: any;
  specialParams: any;
  calcParams: any;
  countrySelectOptions: any = {
    title: 'Выберите страну',
    enableBackdropDismiss: true
  };
  isShowCalc: boolean = false;
  isShowHint: boolean = false;

  chosenParams: any = {
    direction: "I",
    param_cost: null,
    country: "000"
  };

  statsPrice: any;

  constructor(
    public navCtrl: NavController,
    public calcApi: CalcApiService,
    public result: ResultServiceService,
    public alertCtrl: AlertController
  ) {
    let code = this.activatedRoute.snapshot.paramMap.get('code') as string;
    if (code) {
      this.searchTerm = code;
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.isShowHint = !this.searchTerm.trim();
    this.setFilteredItems();
  }

  onSearchInput() {
    this.isShowHint = !this.searchTerm.trim();
    this.setFilteredItems();
  }

  //getStatsPrice(code: string) {
  getStatsPrice() {
    this.statsPrice = null;
    this.calcApi.getStats(this.searchTerm)
      .subscribe(
        data => {
          if (!data.success || data.data.statsprice.maximum == "0.00") {
            return;
          }
          this.statsPrice = data.data.statsprice;
        });
  }

  setFilteredItems() {
    this.isShowCalc = false;
    if (this.searchTerm.length > 0) {
      this.calcApi.getParams(this.searchTerm.replace(' ', '_'), this.chosenParams)
        .subscribe(
        data => {
          this.params = data;
          //console.log(this.params);

          if (!data.success || data.data.calc_info.length == 0) {
            this.isShowHint = true;
            return;
          }

          // special
          this.specialParams = [];
          for (let i = 0; i < data.data.calc_special.length; i++) {
            let f = this.specialParams.find((x:any) => x.type == 'special_' + data.data.calc_special[i].type);
            if (f) {
              f.data.push({
                id: data.data.calc_special[i].id,
                name: data.data.calc_special[i].name
              });
            } else {
              this.specialParams.push({
                type: 'special_' + data.data.calc_special[i].type,
                type_name: data.data.calc_special[i].type_name,
                data: [{
                  id: data.data.calc_special[i].id,
                  name: data.data.calc_special[i].name
                }]
              });

              if (!this.chosenParams['special_' + data.data.calc_special[i].type]) {
                this.chosenParams['special_' + data.data.calc_special[i].type] = "";
              }
            }
          }
          //console.log(this.specialParams);

          // calcParams
          this.calcParams = [];
          for (let key in data.data.calc_params) {
            data.data.calc_params[key].code = 'param_' + data.data.calc_params[key].code;
            this.calcParams.push(data.data.calc_params[key]);
            if (!this.chosenParams[data.data.calc_params[key].code]) {
              this.chosenParams[data.data.calc_params[key].code] = null;
            }
          }
          //console.log(this.calcParams);
          //console.log(this.chosenParams);

          this.isShowHint = false;
          this.isShowCalc = true;

          //this.getStatsPrice(data.data.tnved_code);
        });
    } else {
      this.isShowHint = true;
    }
  }

  tnvedClick() {
    this.navCtrl.navigateRoot(['tabs/tnvedTab']);
  }

  examplesClick() {
    this.navCtrl.navigateRoot(['tabs/examplesTab']);
  }

  calcClick() {
    this.result.calcResult = null;
    this.calcApi.getCalc(this.searchTerm, this.chosenParams).subscribe(
      data => {
        //console.log(data);
        if (data.success) {
          if (data.data.calculation.success) {
            this.result.calcResult = data.data;
            this.navCtrl.navigateForward(['/calc-result']);
            /*
            this.navCtrl.push(CalcResultPage, {
              data: data.data
            });
             */
          } else {
            let msg = '';
            for (let i = 0; i < data.data.calculation.messages.length; i++) {
              msg += data.data.calculation.messages[i].message + "\r\n";
            }

            this.alertCtrl.create({
              header: 'Ошибка',
              message: msg,
              buttons: ['OK']
            }).then(alert => alert.present());
          }
        } else {

        }
      });
  }

  /*
  checkFocus() {
    let countriesLoader = this.loadingCtrl.create({
      content: "Загрузка..."
    });
    countriesLoader.present();

    setTimeout(() => {
      countriesLoader.dismiss();
    }, 500);
  }
   */
}

