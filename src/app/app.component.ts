import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _status = false;
  constructor() {}

  changeStatus() {
    this._status = !this._status;
  }

  get status() {
    return this._status
  }

  set status(value) {
    this._status = value;
  }
}
