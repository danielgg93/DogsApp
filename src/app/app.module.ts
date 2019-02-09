import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/home/titulo/titulo.component';
import { InicioPerrosComponent } from './components/home/inicio-perros/inicio-perros.component';
//Rutas
import {app_routing} from './app.route'

//service
import {ProvidersService} from '../../src/app/providers/providers.service';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PerrosComponent } from './components/perros/perros.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PerrosCardComponent } from './components/perros/perros-card/perros-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    InicioPerrosComponent,
    NavBarComponent,
    HomeComponent,
    PerrosComponent,
    DetalleComponent,
    PerrosCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    app_routing,
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
