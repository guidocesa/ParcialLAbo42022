import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-modificar-piza',
  templateUrl: './modificar-piza.component.html',
  styleUrls: ['./modificar-piza.component.css']
})
export class ModificarPizaComponent implements OnInit {

  @Output() pizaCreada: EventEmitter<any> = new EventEmitter();
  @Input() piza:any;


  nombre:any;
  ingredientes : any;
  peso:any;
  precio:any;
  correcto:boolean = false;

  constructor(private dbService : FirebaseService) { 
  }

  ngOnInit(): void {
  }

  reset(){
    this.nombre='';
    this.ingredientes='';
    this.peso='';
    this.precio='';
  }




  crearPiza() {
    if(this.ingredientes != null && this.peso != null && this.precio != null) {
      let pizaNueva = {nombre:this.piza.nombre, ingredientes:this.ingredientes, peso:this.peso,precio:this.precio};
      this.pizaCreada.emit(pizaNueva);
      this.reset();
      
    }else{
      this.correcto=false;
    }
  }
}
