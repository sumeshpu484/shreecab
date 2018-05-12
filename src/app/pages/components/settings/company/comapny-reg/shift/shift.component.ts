import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Shift } from '../../../../../model/settings/company/company.model';

@Component({
  selector: 'shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
  @Input() shift:Shift
  @Output() shiftSave: EventEmitter<Shift> = new EventEmitter<Shift>();

  isNew: boolean = true;
  isRender:boolean=false;
  shiftForm: FormGroup;
  constructor() { }

  ngOnInit() {
    // this.isNew = true;
    // this.initForm();
  }
  initForm() {
    let isactive: boolean = true;
    let endtime: Date =new Date();
    let starttime: Date =new Date();
    let name: string = '';
    let id: string = 'sampeId';
    let Index: number = 0;  
   
    if (!this.isNew) {
      id = this.shift.id;
      Index = this.shift.Index;
      isactive = this.shift.isactive;
      endtime = this.shift.endtime;
      starttime = this.shift.starttime;
      name = this.shift.name;
    }
    this.shiftForm = new FormGroup({
      // FormControlName,Default value,validator needed or not...
      'id': new FormControl(id),
      'Index': new FormControl(Index),
      'isactive': new FormControl(isactive),
      'endtime': new FormControl(endtime,[Validators.required]),
      'starttime': new FormControl(starttime, [Validators.required]),
      'name': new FormControl(name, [Validators.required])
    });
    this.isRender=true;
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {

    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (propName == "shift") {
        let element = <Shift>changedProp.currentValue;
        
        if (element != null) {
          this.isNew = false;
          this.shift = element;
          this.initForm();
        }
        else{
          this.isNew = true;
          this.initForm();
        }
      }
    }
  }
  onShiftSave(){
    
    const element = <Shift>this.shiftForm.value;
    this.isNew=true;
    this.shiftForm.reset();
    this.shiftForm.pristine;
    this.initForm();
    this.shiftSave.emit(element);
  }
}
