import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchuserService {
  username='jkitsao'
  token='4d448bd9e2b22b52621d51e06918ecd6eb3b92b4'
  url=`https://api.github.com/users/${this.username}?access_token=${this.token}`
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(this.url)
  }
}
