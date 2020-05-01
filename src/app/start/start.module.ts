import { NgModule } from '@angular/core';

import { StartRoutingModule } from './start-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ChartComponent } from './chart/chart.component';
// import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [MenuComponent, PerfilComponent, ContactoComponent, ChartComponent],
  imports: [
    SharedModule,
    StartRoutingModule,
    // ChartsModule
  ]
})
export class StartModule { }
