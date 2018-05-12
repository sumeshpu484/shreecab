

    export interface Keyperson1 {
        name: string;
        mobile: string;
    }

    export interface Keyperson2 {
        name: string;
        mobile: string;
    }

    export interface Latlng {
        lat: string;
        lng: string;
    }

    export interface Location {
        name: string;
        address: string;
        landmark: string;
        areaname: string;
        city: string;
        state: string;
        country: string;
        latlng: Latlng;
    }

    export interface Shift {
        id: string;
        name: string;
        starttime: string;
        endtime: string;
        isactive: string;
    }

    export class UserInfo {
        name: string;
        keyperson1: Keyperson1;
        keyperson2: Keyperson2;
        locations: Location[];
        logo: string;
        shifts: Shift[];
    }


