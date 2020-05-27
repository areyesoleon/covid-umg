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

  constructor(private storage: LocalStorageService) { }

  pushUser(user: User) {
    this.storage.store('user', user);
  }

  pushEncuentro(email: Encuentro) {
    console.log(email);
  }

}
