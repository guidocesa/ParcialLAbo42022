import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-pizas-list',
  templateUrl: './pizas-list.component.html',
  styleUrls: ['./pizas-list.component.css']
})
export class PizasListComponent implements OnInit {

  constructor(private dbService: FirebaseService) { }

  @Input() listaItems: any;
  @Output() modificarPizaEmit: EventEmitter<any> = new EventEmitter();
  @Output() borrarPizaEmit: EventEmitter<any> = new EventEmitter();

  itemSeleccionado : any;
  opcion :any;
  modificar:boolean = false;

  headers = ["Nombre", "Ingredientes", "Peso", "Precio"];
  ngOnInit(): void {
  }


  async seleccionItem(item : any){
    this.itemSeleccionado= undefined;
    await setTimeout(() => {
      this.itemSeleccionado= item;
    
    }, 200);
  }

  modificarPiza(piza:any)
  {
    this.modificarPizaEmit.emit(piza);
  }

  borrarPiza(piza:any)
  {
    this.borrarPizaEmit.emit(piza);
  }


}
