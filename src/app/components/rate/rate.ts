import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
    selector: 'rate',
    templateUrl: 'rate.html'
})
export class RateComponent implements OnInit {

    @Input('data') data: any;

    constructor(public renderer: Renderer2) {

    }

    ngOnInit() {

    }
}
