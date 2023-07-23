import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username:string = "zeta";
  baseUrl:string = "https://jsonplaceholder.typicode.com"; // ! fake api endpoint url
  constructor(private http:HttpClient) { } // ! http client constructor ile çağrurldı.

  getUsers():any{
    return this.http.get(this.baseUrl+"/users");
  }



}
