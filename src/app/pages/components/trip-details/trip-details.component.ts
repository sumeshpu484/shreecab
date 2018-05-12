import { Component, OnInit } from '@angular/core';
import { TripModel, VehicleModel, RouteModel, DriverModel } from '../../model/trip/trip-details.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  displayedColumns = ['Id', 'VNo', 'Status', 'Name', 'Action'];
  dataSource: any = null;
  trpis: TripModel[] = []
  trip:TripModel;
  showDetails:boolean=false;
  constructor() { 
    this.trpis.push(new TripModel(1, "Bnglr-Cochin", "completed",
      new VehicleModel(1, "1234", "TATA", "Nexon"),
      new RouteModel(1, "Bnglr-Cochin", "10.00 h"),
      new DriverModel(1, "xxxx", "5685215278", new Date())));

    this.trpis.push(new TripModel(2, "Cochin-Bnglr", "completed",
      new VehicleModel(2, "23456", "TATA", "Neon"),
      new RouteModel(4, "Cochin-Bnglr", "10.00 h"),
      new DriverModel(5, "yyyy", "895422123", new Date())));

    this.trpis.push(new TripModel(2, "Cochin-Thrissur", "completed",
      new VehicleModel(3, "87658", "TATA", "Hexa"),
      new RouteModel(234, "Cochin-Thrissur", "2.00 h"),
      new DriverModel(354, "zzzz", "895545121", new Date())));

    this.trpis.push(new TripModel(3, "Thrissur-Trivandrem", "completed",
      new VehicleModel(354, "23456", "TATA", "Nexon"),
      new RouteModel(4545, "Thrissur-Trivandrem", "08.00 h"),
      new DriverModel(544, "aaaa", "545465555", new Date())));

    this.trpis.push(new TripModel(4, "Cochin-Thrissur", "completed",
      new VehicleModel(23, "87658", "TATA", "Nexon"),
      new RouteModel(44, "Cochin-Thrissur", "2.00 h"),
      new DriverModel(657, "zzzz", "895545121", new Date())));
    this.dataSource = new MatTableDataSource<TripModel>(this.trpis);
    console.log(this.dataSource);
  }

  ngOnInit() {
    

  }
  onSelect(element:TripModel){
    debugger;
    this.showDetails=true;
    this.trip=element;
  }


}
