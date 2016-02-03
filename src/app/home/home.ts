import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';

@Component({
    selector: 'home',
    styles: [require('./home.css')],
    template: require('./home.html'),
    host: { class: 'homeContent' }
})

export class Home implements OnInit, AfterViewInit {
    constructor(public _animationBuilder: AnimationBuilder) {
    }

    ngOnInit() { }
    ngAfterViewInit() {
        // this._animationBuilder
        //     .css()
        //     .addClass('col-xs-8')
        //     .removeClass('col-xs-2')
        //     .setDuration(5000)
        //     .addAnimationClass('animateBlur')
        //     .start(this.elBG.first.nativeElement)
        //     .onComplete(() => {
        //     });
    }
}
