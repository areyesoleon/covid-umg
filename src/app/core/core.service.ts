import { Injectable } from '@angular/core';
import { NB_THEME_OPTIONS } from '@nebular/theme';
import { LocalStorageService } from 'ngx-webstorage';


export interface User {
  name: string;
  email: string;
  dir: string;
  sick: boolean;
}

export interface Encuentro {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private _users: User[] = [];
  private _encuentros: Encuentro[] = [];

  constructor(private storage: LocalStorageService) { }

  pushUser(user: User) {
    this._users.push(user);
    console.log(this._users);
    this.storage.store('user', this._users);
  }

  pushEncuentro(email: Encuentro) {
    this._encuentros.push(email);
    console.log(this._encuentros);

  }

  get users(): User[] {
    return this._users;
  }

  get encuentros() {
    return this._encuentros;
  }

}
