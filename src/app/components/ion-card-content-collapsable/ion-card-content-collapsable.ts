import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SanitizeHtmlPipe} from "../../services/sanitizehtml.pipe";

@Component({
  selector: 'ion-card-content-collapsable',
  templateUrl: 'ion-card-content-collapsable.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SanitizeHtmlPipe]
})
export class IonCardContentCollapsableComponent implements OnInit {
  @Input('data') data: any;
  //@ViewChild('cc', {static: false}) cardContent: ElementRef;
  @ViewChild('cc', {read: ElementRef}) cardContent: ElementRef;

  isCollapsed: boolean = true;
  icon = "expand";

  constructor(public renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 100ms");
    this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "100px");
  }

  toggleContent() {
    if (this.isCollapsed) {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "100%");
      this.icon = "crop";
    } else {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "100px");
      this.icon = "expand";
    }

    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }
}
