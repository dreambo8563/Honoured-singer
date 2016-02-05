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
    selector: 'firstName',
    styles: [require('./firstName.css')],
    template: require('./firstName.html'),
    outputs: ['showOthers']
})

export class FirstName implements OnInit {
    @ViewChild('firstName') firstNameEl: ElementRef;
    showOthers: EventEmitter<boolean>;
    constructor(public _animationBuilder: AnimationBuilder) {
        this.showOthers = new EventEmitter();
    }
    ngOnInit() { }


    ngAfterViewInit() {
        this._animationBuilder
            .css()
            .setFromStyles({ 'font-size': '0px' })
            .setToStyles({ 'font-size': '70px' })
            .setDuration(3000)
            .start(this.firstNameEl.nativeElement)
            .onComplete(() => {
                this.showOthers.emit(true);
            });
    }
}
