import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{Location} from "../../../../../model/shared/location.model"
@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() location:Location
  @Output() locationSave: EventEmitter<Location> = new EventEmitter<Location>();
  
  isNew: boolean = true;
  isRender:boolean=false;
  locationForm: FormGroup;
  lat:Number=12.9716;
  lng:Number=77.5946;
  pointerlat=12.9716;
  pointerlng=77.5946;
  constructor() { }

  ngOnInit() {
    // this.isNew = true;
    // this.initForm();
  }
  initForm() {
    let Index: number = 0;  
    let latlng_id: string = '';
    let lng: Number =12.9716;
    let lat: Number =77.5946;
    let country: string ='';
    let state: string ='';
    let city: string ='';
    let areaname: string = '';
    let landmark: string = '';
    let address: string = '';
    let name: string = '';
   
    if (!this.isNew) {
      Index=this.location.Index;
      latlng_id = this.location.latlng._id;
      lat = this.location.latlng.lat;
      lng = this.location.latlng.lng;
      country = this.location.country;
      state = this.location.state;
      city = this.location.city;
      areaname = this.location.areaname;
      landmark = this.location.landmark;
      address = this.location.address;
      name = this.location.name;
    }
    this.locationForm = new FormGroup({
      // FormControlName,Default value,validator needed or not...
      'latlng': new FormGroup({
        'lat':new FormControl(lat,[Validators.required]),
        'lng':new FormControl(lng,[Validators.required])
      }),
      'Index': new FormControl(Index),
      'country': new FormControl(country,[Validators.required]),
      'state': new FormControl(state,[Validators.required]),
      'city': new FormControl(city, [Validators.required]),
      'areaname': new FormControl(areaname, [Validators.required]),
      'landmark': new FormControl(landmark, [Validators.required]),
      'address': new FormControl(address, [Validators.required]),
      'name': new FormControl(name, [Validators.required]),

    });
    this.isRender=true;
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {

    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (propName == "location") {
        let element = <Location>changedProp.currentValue;
        if (element != null) {
          this.isNew = false;
          this.location = element;
          this.initForm();
        }
        else{
          this.isRender=true;
          this.initForm();
        }
      }
    }
  }
  selectPlace($event){
    console.log($event);
    this.pointerlat=$event.coords.lat;
    this.pointerlng=$event.coords.lng;
    
    this.locationForm.controls["latlng"].get('lat').setValue(this.pointerlat)
    this.locationForm.controls["latlng"].get('lng').setValue(this.pointerlng)
    
  }
  onLocationSave($event){
    debugger;
    const element = <Location>this.locationForm.value;
    this.isNew=true;
    this.locationForm.reset();
    this.locationForm.pristine;
    this.initForm();
    this.locationSave.emit(element);
  }

}
