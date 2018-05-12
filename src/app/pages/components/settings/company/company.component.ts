import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Company } from '../../../model/settings/company/company.model';
import { CompanyService } from '../../../service/settings/company.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  
  createMode:boolean=false;
  isNew:boolean=true;
  displayedColumns = ['_primeryId','keyPerson1', 'keyPerson2', 'name', '_class','Action'];
  //displayedColumns = ['_Id','_primeryId'];
 
  companys: Company[] = [];
  company: Company=null;
  dataSource: any = null;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getAllCompany();
  }
  getAllCompany() {
    this.companyService.getAllCompany().subscribe((data:any) => { 
      if (data) {
        if (data.status == "SUCCESS") {
          let number = 1
          debugger;
          data.responsepayload.companies.forEach(element => {
            element._primeryId = number;
            this.companys.push(element);
            number++;
          });
          this.dataSource = new MatTableDataSource<Company>(this.companys);
        }
      } else {

      }
    })
  }

  create(){
      this.company=null;
      this.createMode=true; 
  }
  onCompanySave($event){
    $event._primeryId = this.companys.length+1;
    this.companys.push($event);

    this.createMode=!this.createMode;
  }


}
