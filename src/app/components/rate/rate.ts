import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SanitizeHtmlPipe} from "../../services/sanitizehtml.pipe";

@Component({
  selector: 'rate',
  templateUrl: 'rate.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SanitizeHtmlPipe]
})
export class RateComponent implements OnInit {

  @Input('data') data: any;

  constructor(public renderer: Renderer2) {

  }

  ngOnInit() {

  }
}
