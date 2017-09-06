import { Component, OnInit } from '@angular/core';
import {TodosService } from '../todos.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
     todos;
     text:string;
     empArr:any[];
     msgError :string;
     obj:Object;
     name:string;
     type:string;
     value:string="Type1";
  constructor(private myService:TodosService) { 
     console.log("Constructor");
     
   
  }

  ngOnInit(){

  	console.log("ngOnINit");
      this.todos=[
        {text:"breakfast at 8"},
        {text:"lunch at 2"},
        {text:"dinner at 8"}
      ];
   this.myService.check().
   subscribe(
    res=>
    this.empArr=res,
    errorMsg => 
    this.msgError=errorMsg
    );
   

  }
 

  addTodo(){

   console.log(this.text);
   this.todos.push({
     text:this.text

   });
  }

  deleteTodo(todo){

    console.log(todo);
     for (var i = 0; i <this.todos.length; i++) {
              
             if(todo==this.todos[i].text)
             {
             	this.todos.splice(i,1);
             }
    	 }
}


submit(obj:any){

  console.log("Submitted");
  console.log(obj);
}



}