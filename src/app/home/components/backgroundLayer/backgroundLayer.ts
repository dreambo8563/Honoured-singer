import {
Component,
OnInit,
Query,
QueryList,
ElementRef,
AfterContentInit,
AfterViewInit,
EventEmitter
} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';
import {HomeImg} from '../homeImg/homeImg';


@Component({
    selector: 'backgroundLayer',
    providers: [AnimationBuilder],
    directives: [HomeImg],
    styles: [require('./backgroundLayer.css')],
    outputs: ['finished'],
    template: require('./backgroundLayer.html'),
    inputs: ['showImg']
})

export class BackgroundLayer implements OnInit, AfterContentInit, AfterViewInit {
    elBG: QueryList<ElementRef>;
    finished: EventEmitter<boolean>;

    showImg: boolean;
    constructor( @Query('leftbg', { descendants: false })
    elBG: QueryList<ElementRef>, public _animationBuilder: AnimationBuilder) {
        this.elBG = elBG;
        this.finished = new EventEmitter();
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
            .setDuration(3000)
            .addAnimationClass('animateBlur')
            .start(this.elBG.first.nativeElement)
            .onComplete(() => {
                this.finished.emit(true);
            });
    }
}

