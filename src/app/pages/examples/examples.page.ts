import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, NavController} from '@ionic/angular';
import {ExamplesApiService} from "../../services/examples.api.service";
import {ActivatedRoute} from "@angular/router";
import {IonCardContentCollapsableComponent} from "../../components/ion-card-content-collapsable/ion-card-content-collapsable";

@Component({
  selector: 'app-examples',
  templateUrl: './examples.page.html',
  styleUrls: ['./examples.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonCardContentCollapsableComponent]
})
export class ExamplesPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  searchTerm: string = '';
  items: any;

  isShowHint: boolean = true;
  isShowNotFound: boolean = false;

  constructor(
    public navCtrl: NavController,
    public examplesApi: ExamplesApiService
  ) {
    let text = this.activatedRoute.snapshot.paramMap.get('text') as string;
    if (text) {
      this.searchTerm = text;
    }
  }

  ionViewDidEnter() {
    this.setFilteredItems();
  }

  onSearchInput(event: any) {
    this.searchTerm = event.target.value;
    this.setFilteredItems();
  }

  setFilteredItems() {
    if (this.searchTerm.length > 0) {
      this.examplesApi.getList(this.searchTerm)
        .subscribe(data => {
          this.isShowHint = false;
          if (!data.success || data.data.data.length == 0) {
            this.isShowNotFound = true;
            this.items = null;
            return;
          }

          this.items = data.data.data;
        });
    } else {
      this.isShowHint = true;
      this.items = null;
      this.isShowNotFound = false;
    }
  }

  tnvedClick(code: string) {
    this.navCtrl.navigateForward(['/tabs/tncode', code]);
  }

  calcClick(code: string) {
    this.navCtrl.navigateForward(['/tabs/calcTab', code]);
  }

  goClick() {
    this.navCtrl.navigateForward('/tabs/tnvedTab')
  }

  ngOnInit(): void {
  }
}
