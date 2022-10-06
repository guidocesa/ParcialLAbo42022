import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(user:string){
    if(user == "parcial@gmail.com" || user == "parcialquenopuedecrear@gmail.com")
    {
      localStorage.setItem('user',user);
      this.router.navigateByUrl('/bienvenida');

    }
    else{
      alert("Datos incorrectos!");
    }
  }
}
