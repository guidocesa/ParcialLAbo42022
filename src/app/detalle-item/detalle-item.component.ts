import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent implements OnInit {

  @Input() inputItemSeleccionado : any;


  constructor() { }

  ngOnInit(): void {
  }

}
