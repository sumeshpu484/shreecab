import { BaseModel, TableModel } from "../../base.model";
import{Location} from "../../shared/location.model"
export class KeyPerson1 {
        _id?: string;
        mobile?: string;
        name?: string;
    }

    export class KeyPerson2 {
        _id?: string;
        mobile?: string;
        name?: string;
        
    }

    export class Shift extends TableModel {
        isactive: boolean;
        endtime: Date;
        starttime: Date;
        name: string;
        id: string;
    }

    export class  Company extends TableModel {
        constructor(){
            super();
            this._id="";
            this.keyPerson1=new KeyPerson1();
            this.keyPerson2=new KeyPerson2();
            this._class="";
            this.shifts=[];
            this.logo="";
            this.locations=[];
            this.name='';
        }
        _id: string;
        keyPerson1: KeyPerson1;
        keyPerson2: KeyPerson2;
        _class: string;
        shifts: Shift[];
        logo: string;
        locations: Location[];
        name: string;
        // constructor(private _id="",
        // private keyPerson1=new KeyPerson2(),
        // private keyPerson2=new KeyPerson2())
    }

    
    

