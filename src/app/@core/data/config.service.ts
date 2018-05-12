import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NavigationStart, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';

@Injectable()
export class ConfigService //FuseConfigService
{
    
    _apiURI: string;
    
    constructor(
    )
    {
        this._apiURI = 'http://ec2-13-232-24-81.ap-south-1.compute.amazonaws.com/';
        
    }

    /**
     * Sets settings
     * @param settings
     */
    
    getApiURI() {
        return this._apiURI;
    }
    
}
