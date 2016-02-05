import {
Component,
OnInit,
AfterViewInit,
ElementRef,
ViewChild,
EventEmitter
} from 'angular2/core';
import {AnimationBuilder} from 'angular2/animate';

@Component({
    selector: 'lastName',
    styles: [require('./lastName.css')],
    template: require('./lastName.html'),
    outputs: ['lastNameFinished'],
})

export class LastName implements OnInit {
    @ViewChild('lastName') lastNameEl: ElementRef;
    lastNameFinished: EventEmitter<boolean>;
    constructor(public _animationBuilder: AnimationBuilder) {
        this.lastNameFinished = new EventEmitter();
    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._animationBuilder
            .css()
            .setFromStyles({ 'font-size': '0px' })
            .setToStyles({ 'font-size': '70px' })
            .setDuration(3000)
            .start(this.lastNameEl.nativeElement)
            .onComplete(() => {
                this.lastNameFinished.emit(true);
            });
    }
}
