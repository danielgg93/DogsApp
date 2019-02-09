import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  apiUrl = 'https://dog.ceo/api/breeds/image/random/2';

  apiUrl2 = 'https://dog.ceo/api/breed/hound/images';

  constructor(private http: HttpClient) {
    
   }


   
//metodo para consumir los perros del home
imagen_perros_home() {
  return new Promise<any>((resolve, reject) => {
    this.http.get(this.apiUrl ).
      subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

get_perro(idx:string){

}

//metodo para consumir todos los perros
grid_perros(){
  return new Promise<any>((resolve, reject) =>{
    this.http.get(this.apiUrl2).
    subscribe(res =>{
      resolve(res);
      console.log(res);
    }, (err => {
      reject(err);
    }))
  })
}
  
}

