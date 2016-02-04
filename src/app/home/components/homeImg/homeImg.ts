import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'homeImg',
    styles: [require('./homeImg.css')],
    template: require('./homeImg.html'),
    host:{class:"homeBG"}
})

export class HomeImg implements OnInit {

    constructor() { }

    ngOnInit() { }
}