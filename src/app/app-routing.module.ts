import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginNuevoScreenComponent } from './screens/login-nuevo-screen/login-nuevo-screen.component';

const routes: Routes = [
  //AQUI SE AGREGAN CADA UNA DE LAS RUTAS DEL PROYECTO
  {path: '', component: LoginScreenComponent, pathMatch: 'full'},
  {path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  {path: 'loginNuevo', component: LoginNuevoScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
