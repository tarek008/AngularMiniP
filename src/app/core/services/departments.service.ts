import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../model/department';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  public url_apilist = environment.urlDep;
  getallquery = 'displayalldepartment'
  constructor(private httpClient: HttpClient) {
    console.log(this.url_apilist);

  }

  getDepartments(): Observable<Department[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Department[]>(`${this.url_apilist + this.getallquery}`, { "headers": headers });
  }
  geDepartmentById(id: number): Observable<Department> {
    return this.httpClient.get<Department>(this.url_apilist + 'displdepartmentbyid/' + id);

  }
  addDepartment(department: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<any>(this.url_apilist + 'addDepartment', department, { "headers": headers });
  }
  updateDepartment(id: number, department: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put<any>(this.url_apilist + 'updatedepartment/' + id, department, { "headers": headers });
  }
  deleteDepartment(id: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    console.log(id)
    return this.httpClient.delete<any>(this.url_apilist + 'DeleteDepartment/' + id, { "headers": headers });
  }
  getEnseignantsByDepartment(id: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<any>(this.url_apilist + 'GetListOfEnseignantByDepartment/' + id, { "headers": headers });
  }
}
