import { Component } from '@angular/core';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {TodosService } from './todos.service';
import {ElementRef} from '@angular/core';
import {OnInit} from "@angular/core";
import { Select2TemplateFunction} from 'ng2-select2';
import { Select2OptionData } from 'ng2-select2';
//import Select2Component from 'angular2-select2';
import {childComponent} from './app.child.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {SelectModule} from 'ng-select'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodosService ]
})
export class AppComponent implements OnInit {
title:string="ali"
Items:any[];
empArr:any[];
 public exampleData: Array<Select2OptionData>;
 public startValue: string;
 public selected: string;
  public options: Select2Options;
  public name:string='Ali';
   optionsModel: number[];
   myOptions: IMultiSelectOption[] ;
       options1: Array<any>;
    mySelectValue: Array<string>;
constructor(private todos:TodosService){
   
 
  this.Items=[
  {
     name:'ali',
     email:'alimahmmod@gmail.com'
  },
  {
    name:'ali',
     email:'alimahmmod@gmail.com' 
  }
   
  ] 
 
  // console.log(this.Items[0].name);
  // console.log(this.Items[0].email);

}




 getChangeList(): Select2OptionData[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3'
                    }
                ]
            }
        ];
    }


getTemplateList(): Select2OptionData[] {
        return [
            {
                id: 'temp1',
                text: 'Template 1',
                additional: {
                    image: 'assets/image0.jpg',
                    winner: '4'
                }
            },
            {
                id: 'temp2',
                text: 'Template 2',
                additional: {
                    winner: '3'
                }
            },
            {
                id: 'temp3',
                text: 'Template 3',
                additional: {
                    image: 'assets/image1.jpg',
                    winner: '1'
                }
            },
            {
                id: 'temp4',
                text: 'Template 4',
                additional: {
                    image: 'assets/image2.jpg',
                    winner: '5'
                }
            },
            {
                id: 'temp5',
                text: 'Template 5',
                additional: {
                    image: 'assets/image3.jpg',
                    winner: '2'
                }
            }
        ];
    }








ngOnInit(){
   // this.todos.check().subscribe(res=>this.empArr=res);
   // console.log("name is "+this.empArr[0].name);
   //this.exampleData = this.getTemplateList();
  this.exampleData= [

         {
                id: 'temp1',
                text: 'Template 1',
                additional: {
                    image: 'assets/image0.jpg',
                    winner: '4'
                }
            },
            {
                id: 'temp2',
                text: 'Template 2',
                additional: {
                    winner: '3'
                }
            },
            {
                id: 'temp3',
                text: 'Template 3',
                additional: {
                    image: 'assets/image1.jpg',
                    winner: '1'
                }
            },
            {
                id: 'temp4',
                text: 'Template 4',
                additional: {
                    image: 'assets/image2.jpg',
                    winner: '5'
                }
            },
            {
                id: 'temp5',
                text: 'Template 5',
                additional: {
                    image: 'assets/image3.jpg',
                    winner: '2'
                }
            }


  ];
   // console.log(this.exampleData)
    this.startValue = 'car3';
    this.selected = '';
    this.options = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection
    }
       this.myOptions= [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
        ];

    this.options1 = [
            {value: 'a', label: 'Alpha'},
            {value: 'b', label: 'Beta'},
            {value: 'c', label: 'Gamma'},
        ];
        this.mySelectValue = ['b', 'c'];
   


}

  public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="image"></span>';

    if (state.additional.image) {
      image = '<span class="image"><img src="' + state.additional.image + '"</span>';
    }

    return jQuery('<span><b>' + state.additional.winner + '.</b> ' + image + ' ' + state.text + '</span>');
  }

 public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    return jQuery('<span><b>' + state.additional.winner + '.</b> ' + state.text + '</span>');
  }

// public changeValue() {
//     this.startValue = 'car2';
//   }

  public changeData() {
    //this.exampleData = this.service.getChangeListAlternative();
  }

  public changed(e: any): void {
    this.selected = e.value;
  }

}