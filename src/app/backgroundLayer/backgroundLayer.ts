import {Component, OnInit, Query, QueryList,
ElementRef, AfterContentInit, AfterViewInit} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';
import { Home } from '../home/home';

@Component({
    selector: 'backgroundLayer',
    providers: [AnimationBuilder],
    directives: [Home],
    styles: [require('./backgroundLayer.css')],
    host: {
        'class': 'container-fluid height100'
    },
    template: require('./backgroundLayer.html')
})

export class BackgroundLayer implements OnInit, AfterContentInit, AfterViewInit {
    elBG: QueryList<ElementRef>;
    showHome: boolean = false;
    constructor( @Query('leftbg', { descendants: false })
    elBG: QueryList<ElementRef>, public _animationBuilder: AnimationBuilder) {
        this.elBG = elBG;
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log('From - backgroundLayer - ngAfterContentInit: ', this.elBG);

    }

    ngAfterViewInit() {
        this._animationBuilder
            .css()
            .addClass('col-xs-8')
            .removeClass('col-xs-2')
            .setDuration(5000)
            .addAnimationClass('animateBlur')
            .start(this.elBG.first.nativeElement)
            .onComplete(() => {
                this.showHome = true;
            });
    }
}
