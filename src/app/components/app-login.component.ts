import {Component,OnInit} from '@angular/core';
import {LoginService} from '../services/app-login-service'
import { Router } from '@angular/router';

@Component({

 selector:'app-login',
 templateUrl:'../views/app-login.component.html',
 styleUrls: ['../styles/app-login.component.css'] 

})

export class LoginComponent {

public name:string='';
public password:string='';
public user:Object={};
public title:string="Login";

constructor(private userApi:LoginService,private router:Router){


}

ngOnInit(){


}

login(){
  this.user={
  	name:this.name,
  	password:this.password
  }
  this.userApi.login(this.user)
  .subscribe((res:any)=>
  	{
  	 console.log(res)
     window.localStorage.setItem("token",res.authentication_token);
     var token = window.localStorage.getItem("token");
      console.log(token)
  	 this.router.navigateByUrl('/projects');
  	},(err:any)=>
  	{
  		console.log(err);
      this.title="Wrong username or password"
  	})


}







}