import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { etudiants } from '../model/etudiants';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public url_apilist = environment.url;
  getallquery = 'DisplayStudents';
  filter = 'existenceByName/';
  constructor(private httpClient: HttpClient) {
    console.log(this.url_apilist);

  }
  getEtudiantsListe(): Observable<etudiants[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants[]>(`${this.url_apilist + this.getallquery}`, { "headers": headers });
  }
  geEtudiantById(id: number): Observable<etudiants> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants>(this.url_apilist + 'DisplayEtudiantById/' + id, { "headers": headers });
  }
  getEtudiantFiltredbyname(name: String): Observable<etudiants[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants[]>(`${this.url_apilist + this.filter + name}`, { "headers": headers });
  }
  getEtudiantByDepartment(id: number): Observable<etudiants[]> {
    return this.httpClient.get<etudiants[]>(`${'https://7e7a-197-25-191-19.eu.ngrok.io/SpringMVC/DepartmentController/GetListOfEtudiantsByDepartment/' + id}`);
  }
  addEtudiant(e: etudiants) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.url_apilist + 'ajouterEtudiant', e, { "headers": headers })
  }
  updateEtudiant(e: etudiants) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(this.url_apilist + 'updateStudentById', e, { "headers": headers })
  }
  deleteEtudiantByID(id: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete(this.url_apilist + 'deletestudent/' + id, { "headers": headers });
    console.log(id);
  }

}
