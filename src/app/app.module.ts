import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { LoginComponent } from './login/login.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DetalleItemComponent } from './detalle-item/detalle-item.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizasListComponent } from './pizas-list/pizas-list.component';
import { AltaPizaComponent } from './alta-piza/alta-piza.component';
import { ModificarPizaComponent } from './modificar-piza/modificar-piza.component';
import { BorrarPizaComponent } from './borrar-piza/borrar-piza.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    LoginComponent,
    ItemListComponent,
    DetalleItemComponent,
    DetallePaisComponent,
    PizzasComponent,
    PizasListComponent,
    AltaPizaComponent,
    ModificarPizaComponent,
    BorrarPizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }