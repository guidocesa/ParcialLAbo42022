import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  listaItems: any;
  modificar:boolean = false;
  borrar:boolean = false;
  pizaAModificar:any;

  constructor(private dbService: FirebaseService) { }

  ngOnInit(): void {
    this.traerListaActualizada();
  }

  traerListaActualizada(){
    this.dbService.traerColeccion('pizas').subscribe(datos => this.listaItems = datos);
  }

  agregarPiza(piza:any)
  {
    this.dbService.agregarElemento('pizas',piza.nombre,piza);
  }

  modificarPiza(piza:any)
  {
    this.modificar = true;
    this.pizaAModificar = piza;
  }

  borrarPiza(piza:any)
  {
    
  }

  recibirPizaModificada(pizaNueva:any)
  {
   
    console.log(pizaNueva);
    this.listaItems.forEach((piza: any) => {
      if(piza.nombre == pizaNueva.nombre)
      {
        console.log(piza);
        piza.ingredientes = pizaNueva.ingredientes;
        piza.peso = pizaNueva.peso;
        piza.precio = pizaNueva.precio;
      }
    });
  }

}
