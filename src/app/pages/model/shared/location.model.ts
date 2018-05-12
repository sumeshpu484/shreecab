import { TableModel } from "../base.model";

    
export interface Location extends TableModel{
    latlng: Latlng;
    country: string;
    state: string;
    city: string;
    areaname: string;
    landmark: string;
    address: string;
    name: string;
}
export interface Latlng {
    _id: string;
    lng: any;
    lat: any;
}