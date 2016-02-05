import {Component, OnInit} from 'angular2/core';

import { Home } from './home/home';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ShowBasicInfo} from './home/services/showBasicInfo';

@Component({
    selector: 'app',
    styles: [require('./app.css')],
    directives: [Home, ROUTER_DIRECTIVES],
    providers: [ShowBasicInfo],
    template: require('./app.html'),
    host: {
        'class': 'container-fluid height100'
    }
})
@RouteConfig([
    { path: '/', name: 'Home', component: Home, useAsDefault: true }
])
export class App implements OnInit {
    showFooter: boolean;
    constructor(public _showBasic: ShowBasicInfo) {
        this._showBasic.showBasic$.subscribe(
            show => {
                this.showFooter = show;
            }
        );
    }

    ngOnInit() {
    }
}
