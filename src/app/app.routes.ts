import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LibrosgestionComponent } from './pages/librosgestion/librosgestion.component';
import { UsergestionComponent } from './pages/usergestion/usergestion.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

import { librossGuard } from './guards/libross.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'prestamos', component: PrestamosComponent},
    {path:'contactos', component: ContactosComponent},
    {path:'catalogo', component: CatalogoComponent},
    {path:'gestionlibros', component: LibrosgestionComponent,canActivate:[librossGuard] },
    {path:'gestionusuarios', component: UsergestionComponent,canActivate:[librossGuard]},
    {path:'login', component: LoginComponent},
    {path:'registro', component: RegistroComponent,canActivate:[librossGuard]},
    {path: '**', component: Error404Component},
    {path: '' , redirectTo: 'home',pathMatch: 'full'}


];
