import {Component,
OnInit,
AfterViewInit,
Query,
QueryList,
ElementRef,
ViewChild} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';

@Component({
    selector: 'home',
    styles: [require('./home.css')],
    template: require('./home.html'),
    host: { class: 'homeContent' }
})

export class Home implements OnInit, AfterViewInit {
    private showOthers: boolean = false;
    @ViewChild('lastName') lastNameEl: ElementRef;
    @ViewChild('firstName') firstNameEl: ElementRef;
    constructor(public _animationBuilder: AnimationBuilder) {
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this._animationBuilder
            .css()
            .setFromStyles({ "font-size": "0px" })
            .setToStyles({ "font-size": "70px" })
            .setDuration(3000)
            .start(this.lastNameEl.nativeElement)
            .onComplete(() => {
                this._animationBuilder
                    .css()
                    .setFromStyles({ "font-size": "0px" })
                    .setToStyles({ "font-size": "70px" })
                    .setDuration(3000)
                    .start(this.firstNameEl.nativeElement)
                    .onComplete(() => {
                        this.showOthers = true;
                    });
            });
    }
}
