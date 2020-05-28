import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  private _form: FormGroup;

  constructor(private builder: FormBuilder, private core: CoreService, private ws: WebSocketService) {
    this._form = this.builder.group({
      name: null,
      email: null,
      dir: null,
      sick: false,
      encuentros: [[]]
    });
  }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    return this._form;
  }

  save() {
    this.core.pushUser(this._form.value);
    this.ws.emit('user:ws', this._form.value);
    this._form.reset();
    this._form.patchValue({sick: false});
    this._form.patchValue({encuentros: []});
  }


}
