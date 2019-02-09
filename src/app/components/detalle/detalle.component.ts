import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProvidersService} from '../../providers/providers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent  {
  dog: any;
  
  constructor(private activatedRoute: ActivatedRoute,
    private provider: ProvidersService) { 
      this.activatedRoute.params.subscribe(params => {
        this.dog = this.provider.grid_perros(params['id']);
        console.log(this.dog);
      });

   
  }


  
  
  

}
