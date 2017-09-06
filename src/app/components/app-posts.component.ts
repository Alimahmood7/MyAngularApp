import {Component,OnInit} from '@angular/core';
import {LoginService} from '../services/app-login-service'
import {ActivatedRoute,Router} from '@angular/router';


@Component({

 selector:'app-post',
 templateUrl:'../views/app-post.component.html'
 
})

export class PostsComponent {

public Pname:string='';
public Pdesc:string='';
public project:Object={};
public posts:Array<Object>;
constructor(private userApi:LoginService,private router:Router){
  var token = window.localStorage.getItem("token");
  //console.log(token);
  if(token == null)
   {
      this.router.navigateByUrl('/');      
   }

}


ngOnInit(){
 
   this.fetchProjects();
}

fetchProjects(){

this.userApi.fetchData().
subscribe((res:any)=> 
{
	console.log(res)
    this.posts=res;

},(err:any)=>
{
	//console.log(err)
});

}

aProject(){
   //console.log("projects");
	this.project={
  	name:this.Pname,
  	description:this.Pdesc
  }
  this.userApi.aProject(this.project)
  .subscribe((res:any)=>
  	{
  	 //console.log(res)
  	 this.fetchProjects();

  	},(err:any)=>
  	{
  		console.log(err)
  	})
}


delete(id:any)
{
// deleteProject
this.userApi.deleteProject(id).
subscribe((res:any)=> 
	{
		console.log(res)
		this.fetchProjects();
	},(err:any)=>
	{
		console.log(err)
	});

}



}