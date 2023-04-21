import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, NavController} from '@ionic/angular';
import {TnvedApiService} from "../../services/tnved.api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tnved',
  templateUrl: './tnved.page.html',
  styleUrls: ['./tnved.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TnvedPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  nodes: Array<any> = [];
  loaderIndicator: any;
  isShowFooter: boolean = false;
  id: string = "0";

  constructor(
    public navCtrl: NavController,
    public tnvedApi: TnvedApiService,
  ) {
    let code = this.activatedRoute.snapshot.paramMap.get('code') as string;
    this.id = code || "0";
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadNode(this.id);
  }

  nodeOnClick(node: any) {
    if (node.has_childs == 0) {

      let code = node.kod;
      if (node.kodplus) {
        code += '_' + node.kodplus;
      }

      this.navCtrl.navigateForward(['/tabs/tncode', code]);
    } else {
      this.navCtrl.navigateForward(['/tabs/tnvedTab', node.idx]);
    }
  }

  loadNode(id: string) {
    this.isShowFooter = (id != "0");

    this.tnvedApi.getNode(id)
      .subscribe(data => {
        this.nodes = data.nodes;
      });
  }
}
