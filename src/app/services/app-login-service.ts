import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()

export class LoginService {

	public url:string='http://localhost:3000';
	public body:Object;

constructor(private _http:Http){
     

}

login(body:any):Observable<Response>{
	this.body=body;
	console.log(this.body);
	//let pUrl=this.url+'/create'
	return this._http.post(this.url+'/customers/sign_in',this.body)
	.map((res:Response)=>res.json())
	.catch((err:any)=>Observable.throw('Server error'))

}


aProject(body:any):Observable<Response>{
	this.body=body;
	//console.log(this.body);
	//let pUrl=this.url+'/create'
	return this._http.post(this.url+'/projects',this.body)
	.map((res:Response)=>res.json())
	.catch((err:any)=>Observable.throw('Server error'))

}


fetchData():Observable<Response>{

return this._http.get(this.url+'/projects')
	.map((res:Response)=>res.json())
	.catch((err:any)=>Observable.throw(err.json() || 'Server error'))
}


fetchDetail(id:any):Observable<Response>{
return this._http.get(this.url+'/projects/'+id)
	.map((res:Response)=>res.json())
	.catch((err:any)=>Observable.throw(err.json() || 'Server error'))
}


deleteProject(id:any):Observable<Response>{
	let headers = new Headers();

	const token = localStorage.getItem('token');
	if(token){
		headers.set('token',token);
	}
	let options = new RequestOptions({ 
     headers:headers
  });
	console.log(options);
return this._http.delete(this.url+'/projects/'+id,options)
	.map((res:Response)=>res.json())
	.catch((err:any)=>Observable.throw('Server error'))
}



}