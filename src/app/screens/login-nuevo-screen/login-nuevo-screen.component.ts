import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-nuevo-screen',
  templateUrl: './login-nuevo-screen.component.html',
  styleUrls: ['./login-nuevo-screen.component.scss']
})
export class LoginNuevoScreenComponent {
 //Aquí se definen las variables
 public type: String = "password";
 public username: String = "";
 public password: String = "";

 public errors:any = {};

 constructor(
   private router: Router
 ) { }

 ngOnInit(): void {
 }

 public login(){
   if(this.username == ""){
     this.errors.username = "Campo requerido";
   }
   if(this.password == ""){
     this.errors.password = "Campo requerido";
   }
 }

 public showPassword(){
   if(this.type == "password"){
     this.type = "text";
   }else{
     this.type = "password";
   }
 }

 public goRegistro(){
   this.router.navigate(["registro"]);
 }

}//Fin clase

