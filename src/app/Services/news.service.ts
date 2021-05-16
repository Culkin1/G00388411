import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  GetNewsData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27')
    
    //'ac91000dcaeb4f3a8869de190d0b542d'
    //http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27
    //http://www.omdbapi.com/apikey.aspx?VERIFYKEY=9e087c00-c6a8-484f-ba86-0c4fae6103dc

   // http://www.omdbapi.com/?i=tt3896198&apikey=c4b24f0b



  }


}
