import { Component, OnInit } from '@angular/core';
import { ApiPaisesService } from '../api-paises.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  dni:any;
  nombre:any;
  edad : any;
  capacidad:any;
  nacionalidad:any;
  unidadPropia = null;
  correcto:boolean = false;
  listaPaises:any;
  
  continente = 'europe';

  constructor(private api:ApiPaisesService , private dbService : FirebaseService) { 
    this.api.obtenerListadoParametro('https://restcountries.com/v3.1/region/europe').subscribe((data:any) => {
      this.listaPaises= data;      
    });
  }

  ngOnInit(): void {
  }

  reset(){
    this.dni='';
    this.nombre='';
    this.edad='';
    this.capacidad='';
    this.nacionalidad='';
  }

  agarrarPais(pais:any){
    this.nacionalidad=pais.name.common;
  }




  crearRepartidor() {
    if(this.dni != null && this.nombre != null && this.edad != null && this.capacidad != null && this.nacionalidad != null) {
      this.dbService.agregarElemento('repartidor',this.dni,{dni:this.dni, nombre:this.nombre, edad:this.edad,capacidad:this.capacidad,nacionalidad:this.nacionalidad, unidadPropia: this.unidadPropia})
      this.reset();
      this.correcto=true;
      setTimeout(() => {
        this.correcto=false;
      }, 2000);
      
    }else{
      this.correcto=false;
    }
  }

  cambiarTabla(){
    this.api.obtenerListadoParametro('https://restcountries.com/v3.1/region/' + this.continente).subscribe((data:any) => {
      this.listaPaises= data;      
    });
  }

}
