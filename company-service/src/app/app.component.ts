import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'company-module';
constructor(private companyService: CompanyService){
  this.getCompanyDetails();
}

  register(registerForm: NgForm){
    this.companyService.registerCompany(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getCompanyDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getCompanyDetails(){
    this.companyService.getCompany().subscribe(
      (resp)=>{
        console.log(resp);
        this.companyDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  companyDetails= null as any;

  deleteCompany(company: any){
    this.companyService.deleteCompany(company.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getCompanyDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  companyToUpdate={
    C_id: "",
    C_name: "",
    C_dept: "",
    desig:"",
    city: ""
  };

  edit(company: any){
    this.companyToUpdate=company;
  }
  updateCompany(){
    this.companyService.updateCompany(this.companyToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
