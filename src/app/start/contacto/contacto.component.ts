import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  private _form: FormGroup;

  constructor(private builder: FormBuilder, public core: CoreService) {
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
    this.core.pushEncuentro(this._form.value);
    this._form.reset();
  }

}
