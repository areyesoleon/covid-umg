import { Component } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _status = false;
  
  constructor(private ws: WebSocketService, private storage: LocalStorageService) {}

  changeStatus() {
    this._status = !this._status;
    this.ws.emit('sick:ws', {
      user: this.storage.retrieve('user').email,
      sick: this._status
    });
  }

  get status() {
    return this._status
  }

  set status(value) {
    this._status = value;
  }
}
