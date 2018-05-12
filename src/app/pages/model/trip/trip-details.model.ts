export class TripModel {
    constructor(
        private Id?: number,
        private Name?: string,
        private status?: string,
        private vehicle?: VehicleModel,
        private route?: RouteModel,
        private driver?: DriverModel,
    ) { }
}
export class VehicleModel {
    constructor(
        private Id?: number,
        private VNumber?: string,
        private VName?: string,
        private VModel?: string,
    ) { }
}
export class RouteModel {
    constructor(
        private Id?: number,
        private place?: string,
        private duration?: string
    ) {

    }
}
export class DriverModel {
    constructor(
        private Id?: number,
        private DName?: string,
        private DMobile?: string,
        private DDate?: Date,
    ) { }
}