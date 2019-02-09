import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {ProvidersService} from '../../../providers/providers.service';

@Component({
  selector: 'app-inicio-perros',
  templateUrl: './inicio-perros.component.html',
  styleUrls: ['./inicio-perros.component.css']
})
export class InicioPerrosComponent implements OnInit {
  perros;

  constructor(private provider: ProvidersService) { }

  ngOnInit() {
    this.getPerros();
  }

  getPerros(){
    this.provider.imagen_perros_home().then((data) => {
      this.perros = data.message;
      console.log(this.perros);
    }).catch(err => {
    });
  }
}
