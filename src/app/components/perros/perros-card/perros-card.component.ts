import { Component, OnInit, Input  } from '@angular/core';
import {ProvidersService} from './../../../providers/providers.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perros-card',
  templateUrl: './perros-card.component.html',
  styleUrls: ['./perros-card.component.css']
})
export class PerrosCardComponent implements OnInit {
  @Input() detalle_perro: string;
  @Input() index: number;

  constructor(private provider: ProvidersService,
    private router: Router,) { }

  ngOnInit() {
  }

  detallePerros(){
    this.router.navigate(['/detalle', this.index]);
  }

  
}
