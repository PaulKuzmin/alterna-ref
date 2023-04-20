import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalcPage implements OnInit {

  searchTerm: string = '';//'2402209000';
  searchControl: FormControl;
  searching: any = false;
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

  constructor() { }

  ngOnInit() {
  }

  onSearchInput() {

  }
}
