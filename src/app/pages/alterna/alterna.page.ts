import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ContactApiService} from "../../services/contact.api.service";
import {ContactModel} from "../../models/contact.model";

@Component({
  selector: 'app-alterna',
  templateUrl: './alterna.page.html',
  styleUrls: ['./alterna.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlternaPage implements OnInit {

  public data: ContactModel[] = [];

  constructor(public contactApi: ContactApiService) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.contactApi.get()
      .subscribe((data) => {
        this.data = data.data;
      });
  }
}
