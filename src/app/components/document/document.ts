import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SanitizeHtmlPipe} from "../../services/sanitizehtml.pipe";

@Component({
  selector: 'document',
  templateUrl: 'document.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SanitizeHtmlPipe]
})
export class DocumentComponent implements OnInit {

  @Input('data') data: any;

  constructor(public renderer: Renderer2) {

  }

  ngOnInit() {

  }
}
