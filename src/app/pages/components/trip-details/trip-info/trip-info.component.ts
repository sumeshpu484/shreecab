import { Component, OnInit, Input } from '@angular/core';
import { TripModel } from '../../../model/trip/trip-details.model';

@Component({
  selector: 'trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent implements OnInit {
  @Input() trip:TripModel
  constructor() { }

  ngOnInit() {
  }

}
