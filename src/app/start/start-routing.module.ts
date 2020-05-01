import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
  {
    path: 'start', children: [{
      path: '',
      component: MenuComponent
    }, {
      path: 'perfil',
      component: PerfilComponent
    }, {
      path: 'contacto',
      component: ContactoComponent
    }, {
      path: 'chart',
      component: ChartComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
