import {RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PerrosComponent} from "./components/perros/perros.component";
import {DetalleComponent} from "./components/detalle/detalle.component";

const app_routes : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'perros', component: PerrosComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: '', pathMatch:'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);