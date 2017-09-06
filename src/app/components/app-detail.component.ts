import {Component,OnInit} from '@angular/core';
import {LoginService} from '../services/app-login-service'
import {ActivatedRoute} from '@angular/router';

@Component({

 selector:'app-post',
 templateUrl:'../views/app-detail.component.html'
 
})

export class DetailComponent {


public project:Object={};

constructor(private userApi:LoginService,private activateRoute:ActivatedRoute){
   

}

ngOnInit(){
let id:string=this.activateRoute.snapshot.params['id'];
this.userApi.fetchDetail(id).
subscribe((res:any)=> 
	{
		console.log(res)
		console.log(res.project);
		this.project=res.project
	},(err:any)=>
	{
		console.log(err)
	});

}



}