import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/User';
import { LoginResponseModel } from 'src/app/Models/LoginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient:HttpClient) { }

  getResult(user:User){
    return this.httpClient.post<boolean>('https://localhost:44302/api/login',user);
  }
}
