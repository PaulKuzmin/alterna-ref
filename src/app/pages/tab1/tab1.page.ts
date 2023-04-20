import {Component, inject} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    let code = this.activatedRoute.snapshot.paramMap.get('code') as string;
    console.log('code is '+ code);
  }
}
