import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data : any;
  ngOnInit(): void {
    this.http.get('https://api.github.com/users/guidocesa').subscribe((rsp:any) => {
      this.data= rsp;     
      this.setImage(rsp.avatar_url);     
      console.log(rsp); 
    });  
 
  }

  setImage(url : any){
   var perfil = document.getElementById("img") as HTMLImageElement;
   perfil.src = url;
  }
  

}
