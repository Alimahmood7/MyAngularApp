import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TodosService {
apiUrl:string ="assets/datas.json";
  constructor(private _http:Http) { 
    console.log("todoService"); 
      
  }
  check(){

  	return this._http.get(this.apiUrl).
  	map((response:Response)=> response.json()).
  	catch((err:Response)=> Observable.throw(err ||"server error"));
  }
  
  errorHandler(err:Response){
     console.log(err);
     return Observable.throw(err ||"server error");
  }
}
