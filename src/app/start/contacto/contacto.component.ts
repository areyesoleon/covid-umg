import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { WebSocketService } from 'src/app/web-socket.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  private _form: FormGroup;

  constructor(private builder: FormBuilder, public core: CoreService, private ws: WebSocketService, 
              private storage: LocalStorageService) {
    this._form = this.builder.group({
      email: null,
    });
  }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    return this._form;
  }

  save() {
    this.ws.emit('encuentro:ws', {
      user: this.storage.retrieve('user').email,
      email: this._form.value.email
    });
    this._form.reset();
  }

}
