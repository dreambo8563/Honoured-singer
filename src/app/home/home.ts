import {Component,
OnInit,
AfterViewInit,
Query,
QueryList,
ElementRef,
ViewChild,
EventEmitter} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';
import {BackgroundLayer} from './components/backgroundLayer/backgroundLayer';
import {FirstName} from './components/firstName/firstName';
import {LastName} from './components/lastName/lastName';
import {ShowBasicInfo} from './services/showBasicInfo';

@Component({
    selector: 'home',
    directives: [BackgroundLayer, FirstName, LastName],
    styles: [require('./home.css')],
    template: require('./home.html'),
    host: { class: 'homeContent' }

})
export class Home implements OnInit, AfterViewInit {

    private showHome: boolean = false;
    private startFName: boolean = false;
    private showOthersConent: boolean = false;
    constructor(public _animationBuilder: AnimationBuilder, public _showBasic: ShowBasicInfo) {
    }
    ngOnInit() { }
    ngAfterViewInit() {

    }

    startHome(startHome: boolean) {
        this.showHome = startHome;
    }
    startFirstName(startFirstName: boolean) {
        this.startFName = startFirstName;
        console.log(this.startFName);

    }
    showOthers(showOthers: boolean) {
        this.showOthersConent = showOthers;
        this._showBasic.show(true);
    }
}
