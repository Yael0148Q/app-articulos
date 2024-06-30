import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarArchivosComponent } from './componentes/cargar-archivos/cargar-archivos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'cargar-archivos',component:CargarArchivosComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
