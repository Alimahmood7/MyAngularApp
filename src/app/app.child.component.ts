import { Input,Output  } from '@angular/core';
import {AfterViewInit, Component, OnInit, NgModule, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'child-view',
  template: `<h1>ChildComponent</h1>
            <p> {{parentData}} </p>
             <h1>Angular 2 select demo app</h1>
<form style="padding:18px;max-width:800px;"
    [formGroup]="form">
	
    <div style="margin:5px 0;font-weight:600;">Single select example</div>
    <ng-select
		  [options]="options0"
		  [multiple]="multiple0"
		  placeholder="Select one"
      formControlName="selectSingle"
      [allowClear]="true"
      (opened)="onSingleOpened()"
      (closed)="onSingleClosed()"
      (selected)="onSingleSelected($event)"
      (deselected)="onSingleDeselected($event)"
      >
	</ng-select>
    
    <div style="margin:10px 0 20px 0;color:#666;font-size:11pt;font-style:italic;">
	    Selected option id: {{form.value['selectSingle']}}
    </div>

    <div>Events:</div>
    <pre #preSingle>{{logSingleString}}</pre>

    <hr style="margin: 18px 0;">

    <div style="margin:5px 0;font-weight:600;">Multilpe select example</div>
	<ng-select
		[options]="options1"
		[multiple]="multiple1"
		placeholder="Select multiple"
        formControlName="selectMultiple"
        (opened)="onMultipleOpened()"
        (closed)="onMultipleClosed()"
        (selected)="onMultipleSelected($event)"
        (deselected)="onMultipleDeselected($event)">
	</ng-select>

    <div style="margin:10px 0 20px 0;color:#666;font-size:11pt;font-style:italic;">
	    Selected option id: {{form.value['selectMultiple']}}
    </div>

    <div>Events:</div>
    <pre #preMultiple>{{logMultipleString}}</pre>
</form>

<hr style="margin: 18px 0;">

<ng-select
  [options]="options1"
  [multiple]="true"
  placeholder="Select one"
  [(ngModel)]="mySelectValue">
</ng-select>

<div style="margin:10px 0 20px 0;color:#666;font-size:11pt;font-style:italic;">
	Selected option id: {{mySelectValue}}
</div> 

     <ng-select
      [options]="options0"
      [multiple]="multiple0"
      placeholder="Select one"
      [allowClear]="true"
      (opened)="onSingleOpened()"
      (closed)="onSingleClosed()"
      (selected)="onSingleSelected($event)"
      (deselected)="onSingleDeselected($event)"
      >
  </ng-select>



 
               `
  
})
export class childComponent implements AfterViewInit, OnInit


{
@Input() parentData:string;
@Output() childData 
 //public childData:string;
    form: FormGroup;

    multiple0: boolean = false;
    multiple1: boolean = true;
    options0: Array<any> = [];
    options1: Array<any> = [];
    selection: Array<string>;

    @ViewChild('preSingle') preSingle;
    @ViewChild('preMultiple') preMultiple;

    logSingleString: string = '';
    logMultipleString: string = '';

    mySelectValue;



constructor(){
//console.log(parentData);
      let numOptions = 100;
        let opts = new Array(numOptions);

        for (let i = 0; i < numOptions; i++) {
            opts[i] = {
                value: i.toString(),
                label: i.toString()
            };
        }

        //this.options0 = opts.slice(0);
        this.options0 = [
            {value: '1', label: 'Umar'},
            {value: '2', label: 'Tayyab'},
            {value: '3', label: 'Kaleem'},
        ];
        this.options1 = opts.slice(0);

}


 ngOnInit() {  
this.form = new FormGroup({});
this.form.addControl('selectSingle', new FormControl());  
this.form.controls['selectSingle'].setValue('5');
this.form.addControl('selectMultiple', new FormControl(['1', '2', '4']));
this.mySelectValue = ['4', '8', '16'];  
 }
ngAfterViewInit() {
	setTimeout(() => { //this.form.controls['selectSingle'].setValue('7');        }, 0);    }

       });
}



onSingleOpened() {
        this.logSingle('- opened');
    }

    onSingleClosed() {
        this.logSingle('- closed');
    }

    onSingleSelected(item) {
        this.logSingle('- selected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onSingleDeselected(item) {
        this.logSingle('- deselected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onMultipleOpened() {
        this.logMultiple('- opened');
    }

    onMultipleClosed() {
        this.logMultiple('- closed');
    }

    onMultipleSelected(item) {
        this.logMultiple('- selected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    onMultipleDeselected(item:any) {
        this.logMultiple('- deselected (value: ' + item.value  + ', label:' + 
                       item.label + ')');
    }

    private logSingle(msg: string) {
        this.logSingleString += msg + '\n';
        
        // Let change detection do its work before scrolling to div bottom.
        setTimeout(() => {
            this.scrollToBottom(this.preSingle.nativeElement);
        });
    }

    private logMultiple(msg: string) {
        this.logMultipleString += msg + '\n';

        // Let change detection do its work before scrolling to div bottom.
        setTimeout(() => {
            this.scrollToBottom(this.preMultiple.nativeElement);
        });
    }

    private scrollToBottom(elem) {
        elem.scrollTop = elem.scrollHeight;
    }

}
