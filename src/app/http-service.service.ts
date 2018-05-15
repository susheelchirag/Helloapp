import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:Http) { }

  getData(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((res=>{
     return JSON.parse(res['_body']);
   })));
  }
}
