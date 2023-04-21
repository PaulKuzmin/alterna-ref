import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, NavController} from '@ionic/angular';
import {TnvedApiService} from "../../services/tnved.api.service";
import {ActivatedRoute} from "@angular/router";
import {RateComponent} from "../../components/rate/rate";
import {TncodeModel} from "../../models/tncode.model";
import {DocumentComponent} from "../../components/document/document";

@Component({
  selector: 'app-tncode',
  templateUrl: './tncode.page.html',
  styleUrls: ['./tncode.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RateComponent, DocumentComponent]
})
export class TncodePage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  loaderIndicator: any;
  codeData: TncodeModel;
  code: string;

  constructor(
    public navCtrl: NavController,
    public tnvedApi: TnvedApiService,
  ) {
    this.code = this.activatedRoute.snapshot.paramMap.get('code') as string;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.code) {
      this.loadCode(this.code);
    }
  }

  loadCode(code: string) {
    this.tnvedApi.getCode(code).subscribe(
      data => {
        this.codeData = data;
        console.log(this.codeData);
      });
  }

  examplesClick() {
    let searchCode = this.code;
    if (searchCode.indexOf('_') > 8) {
      searchCode = searchCode.substr(0, searchCode.indexOf('_'));
    }

    this.navCtrl.navigateForward(['/tabs/examplesTab', searchCode]);
  }

  calcClick() {
    this.navCtrl.navigateForward(['/tabs/calcTab', this.code]);
  }
}
