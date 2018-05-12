import { Component, Input } from '@angular/core';
import { MapmMarker } from '../../model/map.model';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
  <nb-card>
      <nb-card-header>Google Maps</nb-card-header>
      <nb-card-body>
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
          <agm-marker *ngFor="let item of cars" [latitude]="item.latitude" [longitude]="item.longitude" [iconUrl]="car"></agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>  `,
})
export class GmapsComponent {
  zoom=12;
  lat = 12.93406;
  lng = 77.6108817;
  car = "assets/images/map/car-icon-48.ico";
  cars:MapmMarker[] ;
  lat1 = 12.93406;
  lng1 = 77.6108817;

  lat2 = 12.933889;
  lng2 = 77.6109193;

  lat3 = 12.9353483;
  lng3 = 77.6097655;
  constructor(){
    this.cars=[];
    this.cars.push(new MapmMarker(12.933889,77.6109193));
    this.cars.push(new MapmMarker(12.9353483,77.6097655));
    this.cars.push(new MapmMarker(12.93406,77.6108817));
    this.cars.push(new MapmMarker(51.706384,7.946851));
  }
}
