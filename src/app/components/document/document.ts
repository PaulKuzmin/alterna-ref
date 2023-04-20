import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
    selector: 'document',
    templateUrl: 'document.html'
})
export class DocumentComponent implements OnInit {

    @Input('data') data: any;

    constructor(public renderer: Renderer2) {

    }

    ngOnInit() {

    }
}
