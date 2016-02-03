import {Component, OnInit} from 'angular2/core';
import {BackgroundLayer} from './backgroundLayer/backgroundLayer';

@Component({
    selector: 'app',
    styles: [require('./app.css')],
    directives: [BackgroundLayer],
    template: require('./app.html')
})

export class App implements OnInit {

    constructor() { }

    ngOnInit() { }
}
