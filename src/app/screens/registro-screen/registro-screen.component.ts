import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss'],
})
export class RegistroScreenComponent implements OnInit{
  //Aqui van las variables
  public editar:boolean = false;
  public user: any= {};
  public type: String = "password";
  public password: String = "";
  public errors:any = {};

  constructor(
    private location: Location,
  ){ }

  ngOnInit(): void {
    this.user = this.esquemaUser();
    console.log("User: ", this.user);
    
  }

  public regresar(){
    this.location.back();
  }

  public login(){
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

  public esquemaUser(){
    return{
      'matricula': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'fecha_nacimiento': '',
      'curp': '',
      'rfc': '',
      'edad': '',
      'telefono': '',
      'ocupacion': '',
    }
  }
}

