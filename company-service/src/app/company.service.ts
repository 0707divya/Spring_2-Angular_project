import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  API="http://localhost:8080";
  public registerCompany(companyData: any)
  {
    return this.http.post(this.API + '/registerCompany' , companyData);
  }

  public getCompany(){
    return this.http.get(this.API+'/getCompany');
  }

  public deleteCompany(C_id:any){
    return this.http.delete(this.API+'/deleteCompany?C_id=' + C_id);
  }

  public updateCompany(company: any){
    return this.http.put(this.API +'/updateCompany', company);
  }
  constructor(private http: HttpClient) { }
}
