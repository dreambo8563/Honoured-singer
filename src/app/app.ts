import {Component, OnInit} from 'angular2/core';
import {BackgroundLayer} from './backgroundLayer/backgroundLayer';
import { Home } from './home/home';
@Component({
    selector: 'app',
    styles: [require('./app.css')],
    directives: [BackgroundLayer, Home],
    template: require('./app.html')
})

export class App implements OnInit {
    showHome: boolean = false;
    constructor() {

    }

    ngOnInit() { }
    startHome(start: boolean) {
        this.showHome = start;
    }
}
