import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import { PerrosCardComponent } from '../components/perros/perros-card/perros-card.component';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  perros;
  perroInfo;
  perrosImage;

  apiUrl = 'https://dog.ceo/api/breeds/image/random/2';

  apiUrl2 = 'https://dog.ceo/api/breed/hound/images';

  apiUrl3 = 'https://dog.ceo/api/breeds/list/all';

  apiUrl4 = 'https://dog.ceo/api/breed/';


  constructor(private http: HttpClient) {
   
  }




  //metodo para consumir los perros del home
  imagen_perros_home() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.apiUrl).
        subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //metodo para consumir todos los perros
  grid_perros() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.apiUrl2).
        subscribe(res => {
          resolve(res);
          this.perros = res;
        }, (err => {
          reject(err);
        }))
    })
  }


  getPerro(id: string) {
    return this.perros.message[id];
  }


  getPerrosBreeds() {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.apiUrl3).
        subscribe(res => {
          resolve(res);
          this.perroInfo = res;
        }, (err) => {
          reject(err);
        });
    });

  }

}

