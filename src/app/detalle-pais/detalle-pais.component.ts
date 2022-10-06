import { Component, OnInit , Input} from '@angular/core';
import { ApiPaisesService } from '../api-paises.service';
@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() inputItemSeleccionado : any;

  constructor(private api:ApiPaisesService) { }

  detallePais : any;
  ngOnInit(): void {
    console.log(this.inputItemSeleccionado);
    this.api.obtenerListadoParametro('https://restcountries.com/v2/name/' + this.inputItemSeleccionado.nacionalidad).subscribe((data:any) => {
      this.detallePais= data[0];   
      console.log(data[0]);   
    });
  }


 
}
