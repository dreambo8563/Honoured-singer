import {
Component,
OnInit,
AfterViewInit,
ViewChild,
ElementRef,
EventEmitter
} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';

@Component({
    selector: 'homeImg',
    styles: [require('./homeImg.css')],
    template: require('./homeImg.html'),
    host: { class: 'homeBG' }
})

export class HomeImg implements OnInit {
    @ViewChild('homeImg') homeImgEl: ElementRef;

    constructor(public _animationBuilder: AnimationBuilder) {

    }

    ngOnInit() { }
    ngAfterViewInit() {
        this._animationBuilder
            .css()
            .setFromStyles({ 'opacity': '0' })
            .setToStyles({ 'opacity': '1' })
            .setDuration(3000)
            .start(this.homeImgEl.nativeElement)
            .onComplete(() => {
            });
    }
}
