import { Component,Output,  EventEmitter, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-alta-piza',
  templateUrl: './alta-piza.component.html',
  styleUrls: ['./alta-piza.component.css']
})
export class AltaPizaComponent implements OnInit {

  @Output() pizaCreada: EventEmitter<any> = new EventEmitter();


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
    if(this.nombre != null && this.ingredientes != null && this.peso != null && this.precio != null) {
      let pizaNueva = {nombre:this.nombre, ingredientes:this.ingredientes, peso:this.peso,precio:this.precio};
      this.pizaCreada.emit(pizaNueva);
      this.reset();
      
    }else{
      this.correcto=false;
    }
  }
}
