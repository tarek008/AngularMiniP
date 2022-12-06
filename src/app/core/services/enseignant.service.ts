import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../model/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  public url_apilist = environment.urlEns;
  getallquery = 'displayallEnseignant'
  constructor(private httpClient: HttpClient) {
    console.log(this.url_apilist);

  }

  getEnseignants(): Observable<Enseignant[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Enseignant[]>(`${this.url_apilist + this.getallquery}`, { "headers": headers });
  }
  geEnseignantById(id: number): Observable<Enseignant> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Enseignant>(this.url_apilist + 'displEnseignantbyid/' + id, { "headers": headers });

  }
  addEnseignant(enseignant: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<any>(this.url_apilist + 'addEnseignant', enseignant, { "headers": headers });
  }
  updateEnseignant(id: number, enseignant: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put<any>(this.url_apilist + 'updateEnseignant/' + id, enseignant, { "headers": headers });
  }
  deleteEnseignant(id: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    console.log(id)
    return this.httpClient.delete<any>(this.url_apilist + 'DeleteEnseignant/' + id, { "headers": headers });
  }
  getEnseignantsByDepartment(id: any): Observable<any> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<any>(this.url_apilist + 'GetListOfEnseignantByDepartment/' + id, { "headers": headers });
  }
}
