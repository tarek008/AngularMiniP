import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipe } from '../model/equipe';
import { etudiants } from '../model/etudiants';
import { stats } from '../model/stats';
import { stades } from '../model/stade';


@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public url = environment.urlG + '/EquipeController/'
  public urlStad = environment.urlG + '/StadeController/'


  public urlAff = this.url + 'displayEquipes/'
  public urlAdd = this.url + 'addEquipe/'
  public urlGet = this.url + 'displayEquipeById/'
  public urlUpd = this.url + 'updateEquipe/'
  public urlDel = this.url + 'deleteEquipe/'
  public urlStud = this.url + 'getAllEtudiantsfrom1Equipe/'
  public urlStats = this.url + 'countequipeparetudiant/'
  public urlfav = this.url + 'favorite/'
  public urlunfav = this.url + 'unfavorite/'
  public urlmyfav = this.url + 'myfavorites/'

  public urldispStad = this.urlStad + 'displayStades/'
  public urlAddStad = this.urlStad + 'addStade/'



  constructor(private http: HttpClient) { }

  getAllProduct() {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<Equipe[]>(this.urlAff, { "headers": headers })
  }
  addEquipe(e: Equipe) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.urlAdd, e, { "headers": headers })
  }
  getEquipeById(id: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<Equipe>(this.urlGet + id, { "headers": headers })
  }
  UpdateEquipe(e: Equipe) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.put(this.urlUpd, e, { "headers": headers })
  }
  DeleteEquipe(id: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.delete(this.urlDel + id, { "headers": headers })
  }
  getStudEquipe(id: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<etudiants[]>(this.urlStud + id, { "headers": headers })
  }
  getAllStats() {
    return this.http.get<stats[]>(this.urlStats)
  }
  fav(id: number) {
    console.log(id
    );
    return this.http.put(this.urlfav + id, null)
  }
  unfav(id: number) {
    return this.http.put(this.urlunfav, id)
  }
  getAllfav() {
    return this.http.get<Equipe[]>(this.urlmyfav)
  }
  getAllStads() {
    return this.http.get<stades[]>(this.urldispStad)
  }
  addStad(s: stades) {
    return this.http.post(this.urlAddStad, s)
  }
}
