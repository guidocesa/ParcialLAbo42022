import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private dbService: FirebaseService) { }

  listaItems: any;
  itemSeleccionado : any;
  opcion :any;

  headers = ["DNI", "Nombre Completo", "Accion"];
  ngOnInit(): void {
    this.traerListaActualizada();
  }

  traerListaActualizada(){
    this.dbService.traerColeccion('repartidor').subscribe(datos => this.listaItems = datos);
  }

  async seleccionItem(item : any){
    this.itemSeleccionado= undefined;
    await setTimeout(() => {
      this.itemSeleccionado= item;
    
    }, 200);
  }

}
