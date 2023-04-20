import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ContactApiService} from "../../services/contact.api.service";
import {ContactModel} from "../../models/contact.model";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AboutPage implements OnInit {

  public data: ContactModel[] = [];

  constructor(public contactApi: ContactApiService) { }

  ngOnInit() {
    this.contactApi.get()
      .subscribe((data) => {
        this.data = data.data;
        console.log(this.data);
      });
  }

}
