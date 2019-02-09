import { Component, OnInit,  } from '@angular/core';
import {ProvidersService} from './../../providers/providers.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  dogs;
 
  

  constructor(private activatedRoute: ActivatedRoute,
    private provider: ProvidersService,
    private router: Router) { }

  ngOnInit() {
    this.getAllPerros();
   
  }

  getAllPerros(){
    this.provider.grid_perros().then((data) => {
      this.dogs = data.message;
    }).catch(err => {
    });
  }

 

}
