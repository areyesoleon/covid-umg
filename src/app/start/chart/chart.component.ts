import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/web-socket.service';
import { User } from 'src/app/core/core.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  private _users: User[] = [];

  constructor(private ws: WebSocketService) { }

  ngOnInit(): void {
    this.ws.listen('users:ws').subscribe((data) => {
      this._users = data as User[];
    });
  }

  get users(): User[] {
    return this._users;
  }

}
