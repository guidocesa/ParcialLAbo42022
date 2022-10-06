import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { LoggedinService } from './permisos/loggedin.service';
import { ItemListComponent } from './item-list/item-list.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { AdminService } from './permisos/admin.service';

const routes: Routes = [
  {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: AltaRepartidorComponent, canActivate: [LoggedinService]},
  {path: 'lista', component: ItemListComponent, canActivate: [LoggedinService]},
  {path: 'pizas', component: PizzasComponent, canActivate: [AdminService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
