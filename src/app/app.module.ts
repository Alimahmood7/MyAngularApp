import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {DataTableModule} from "angular2-datatable";
import {childComponent} from './app.child.component';
import {LoginComponent} from './components/app-login.component'
import {PostsComponent} from './components/app-posts.component'
import {DetailComponent} from './components/app-detail.component'
// import { Select2Component } from 'ng2-select2/ng2-select2';
import { Select2Module } from 'ng2-select2';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect'
import {SelectModule} from 'ng-select';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import {LoginService} from './services/app-login-service'


const appRoutes:Routes=[

  {path:'projects', component:PostsComponent},
  {path:'login',component:LoginComponent},
  {path:'show/:id',component:DetailComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    Select2Module,
    SelectModule,
    MultiselectDropdownModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    childComponent,
    LoginComponent,
    PostsComponent,
    DetailComponent
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
