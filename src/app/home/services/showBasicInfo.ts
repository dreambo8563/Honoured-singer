import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ShowBasicInfo {
    showBasic$: Observable<boolean>;
    private _showBasic: any;
    constructor() {
        this.showBasic$ = new Observable(observer =>
            {this._showBasic = observer}).share();
    }

    show(show: boolean) {
        this._showBasic.next(show);
    }
}