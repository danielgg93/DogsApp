import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {ProvidersService} from '../../../providers/providers.service';
import { Router } from '@angular/router';
import {PerrosComponent} from './../../perros/perros.component'


@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  constructor(private provider: ProvidersService,
    private router: Router) { }

  ngOnInit() {
  }

  info(){
    //this.router.navigate(['/heroe', this.index]);
    console.log("BOTON DE INICIO");
  }

  

}
