import { Component, OnInit, Input, SimpleChange, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Company,Shift } from '../../../../model/settings/company/company.model';
import {Location  } from '../../../../model/shared/location.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.scss']
})
export class CompanyRegComponent implements OnInit {
  @Input() company:Company;
  @Output() companySave: EventEmitter<Company> = new EventEmitter<Company>();  
  isNew:boolean=true;
  isRender:boolean=false;
  regForm: FormGroup;
  companyShift:Shift
  companyLocation:Location;
  shiftArreyIndex:number=0;
  locationArreyIndex:number=0;
  shiftDisplayedColumns = ['name','starttime', 'endtime','Action'];
  locationDisplayedColumns = ['name','landmark', 'city','state','Action'];
  shiftDataSource: any = null;
  locationDataSource: any = null;
  
  
  constructor() {
    this.companyShift=null;
    this.companyLocation=null;
   }

  ngOnInit() {
    //this.initForm();
  }
  initForm() {
  
    // Steps to crete a form
    // 1) create FormGroup the FormControl...Add FormControl to FormGroup.
    let _id: string ='';
    let keyPerson1:FormGroup;
    let keyPerson1Name:string='';
    let keyPerson1Id:string='';
    let keyPerson1Mobile:string='';

    let keyPerson2Name:string='';
    let keyPerson2Id:string='';
    let keyPerson2Mobile:string='';

    let keyPerson2:FormGroup;
    let _class: string = "";
    let shifts: FormArray = new FormArray([]);
    let locations: FormArray = new FormArray([]);
    let logo: string = "hppt://www.aws.com";
    let name: string = "";
    
    if (!this.isNew) {
      // this.BindAddressTable();
      // this.BindContactTable();
      _id = this.company._id
      _class = this.company._class
      logo = this.company.logo;
      name = this.company.name;
      keyPerson1Name=this.company.keyPerson1.name
      keyPerson2Name=this.company.keyPerson2.name
      keyPerson2Id=this.company.keyPerson2._id
      keyPerson1Id=this.company.keyPerson1._id
      keyPerson1Mobile=this.company.keyPerson1.mobile
      keyPerson2Mobile=this.company.keyPerson2.mobile
    }
    
    this.regForm = new FormGroup({
      // FormControlName,Default value,validator needed or not...
      'name': new FormControl(name, [Validators.required]),
      'keyPerson1': new FormGroup({
        '_id': new FormControl(keyPerson1Id),
        'mobile': new FormControl(keyPerson1Mobile, [Validators.required]),
        'name': new FormControl(keyPerson1Name, [Validators.required])
      }),
      'keyPerson2': new FormGroup({
        '_id': new FormControl(keyPerson2Id),
        'mobile': new FormControl(keyPerson2Mobile, [Validators.required]),
        'name': new FormControl(keyPerson2Name, [Validators.required])
      }),
      'locations': locations,
      'logo': new FormControl(logo),
      'shifts': shifts,
      '_id': new FormControl(_id),
      '_class': new FormControl(_class, [Validators.required]),
    });
    this.isRender=true;
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (propName == "company") {
        let element = <Company>changedProp.currentValue;
        if (element != null) {
          this.isNew = false;
          this.company = element;
          this.initForm();
          this.bindShiftTable();
          this.bindLocationTable();
          this.isRender=true;
        }
        else{
          this.company=new Company()
          this.initForm();
          this.bindShiftTable();
          this.bindLocationTable();
          this.isRender=true;
        }
      }
    }
    
  }
  bindShiftTable(){
    this.shiftDataSource = new MatTableDataSource<Shift>(this.company.shifts);
  }
  bindLocationTable(){
    this.locationDataSource = new MatTableDataSource<Location>(this.company.locations);
  }
  onshiftSave($event:Shift){
    debugger;
    if ($event.Index == 0) {
      let shiftArrey = (<FormArray>this.regForm.controls['shifts']);
      if (shiftArrey != null || shiftArrey != undefined) {
        $event.FormArreyIndex = shiftArrey.length;
        shiftArrey.push(new FormGroup({
          'id': new FormControl($event.id),
          'isactive': new FormControl($event.isactive),
          'endtime': new FormControl($event.endtime),
          'starttime': new FormControl($event.starttime),
          'name': new FormControl($event.name),          
          'IsEdit': new FormControl(false),
          'IsDeleted': new FormControl(false)
        }))
      }
      $event.Index = this.shiftDataSource.data.length + 1;
      //this.shiftDataSource.data.push($event);
      this.company.shifts.push($event);
      this.shiftDataSource._updateChangeSubscription();
      
    }
    else {
      let ItemIndex = this.shiftDataSource.data.findIndex((ind => ind.Index == $event.Index));
      let sihftArrey = (<FormArray>this.regForm.controls['shifts']);
      let item = sihftArrey.at(this.shiftArreyIndex);
      if (item == null || item == undefined) {
        this.shiftArreyIndex = sihftArrey.length;
        sihftArrey.push(new FormGroup({
          'id': new FormControl($event.id),
          'isactive': new FormControl($event.isactive),
          'endtime': new FormControl($event.endtime),
          'starttime': new FormControl($event.starttime),
          'name': new FormControl($event.name),  
          'IsEdit': new FormControl($event.IsEdit),
          'IsDeleted': new FormControl(false)
        }))
      }
      else {
        item.patchValue({
          id: $event.id, isactive: $event.isactive,
          endtime: $event.endtime, starttime: $event.starttime,name: $event.name,
          IsEdit: $event.IsEdit, IsDeleted: false
        })
      }

      $event.FormArreyIndex = this.shiftArreyIndex;
      this.shiftDataSource.data[ItemIndex] = $event;
      this.shiftDataSource._updateChangeSubscription();
      this.company.shifts[ItemIndex] = $event;
    }
  }
  onLocationSave($event:Location){
    debugger;
    if ($event.Index == 0) {
      let locationArrey = (<FormArray>this.regForm.controls['locations']);
      if (locationArrey != null || locationArrey != undefined) {
        $event.FormArreyIndex = locationArrey.length;
        locationArrey.push(new FormGroup({
          'latlng': new FormGroup({
            'lat':new FormControl($event.latlng.lat),
            'lng':new FormControl($event.latlng.lng)
          }),
          'country': new FormControl($event.country),
          'state': new FormControl($event.state),
          'city': new FormControl($event.city),
          'areaname': new FormControl($event.areaname),
          'landmark': new FormControl($event.landmark),
          'address': new FormControl($event.address),
          'name': new FormControl($event.name),   
          'IsEdit': new FormControl(false),
        }))
      }
      $event.Index = this.locationDataSource.data.length + 1;
      //this.shiftDataSource.data.push($event);
      this.company.locations.push($event);
      this.locationDataSource._updateChangeSubscription();
      
    }
    else {
      let ItemIndex = this.locationDataSource.data.findIndex((ind => ind.Index == $event.Index));
      let locationArrey = (<FormArray>this.regForm.controls['locations']);
      let item = locationArrey.at(this.locationArreyIndex);
      if (item == null || item == undefined) {
        this.locationArreyIndex = locationArrey.length;
        locationArrey.push(new FormGroup({
          'latlng': new FormGroup({
            'lat':new FormControl($event.latlng.lat),
            'lng':new FormControl($event.latlng.lng)
          }),
          'country': new FormControl($event.country),
          'state': new FormControl($event.state),
          'city': new FormControl($event.city),
          'areaname': new FormControl($event.areaname),
          'landmark': new FormControl($event.landmark),
          'address': new FormControl($event.address),
          'name': new FormControl($event.name),   
          'IsEdit': new FormControl($event.IsEdit),
        }))
      }
      else {
        item.patchValue({
          latlng: {lat:$event.latlng.lat,lng:$event.latlng.lng}, 
          country: $event.country,state: $event.state, city: $event.city,
          areaname:$event.areaname,landmark:$event.landmark,address:$event.address,name:$event.name,
          IsEdit: $event.IsEdit
        })
      }

      $event.FormArreyIndex = this.locationArreyIndex;
      this.locationDataSource.data[ItemIndex] = $event;
      this.locationDataSource._updateChangeSubscription();
      this.company.locations[ItemIndex] = $event;
    }
  }
  onSave(){
    debugger
    this.regForm.addControl('userid',new FormControl(localStorage.getItem('Id')))
    this.regForm.addControl('authtoken',new FormControl(localStorage.getItem('Token')))
    const element=this.regForm.value;
    this.company=element;
    this.companySave.emit(element)
    console.log(JSON.stringify(element));
  }
}
