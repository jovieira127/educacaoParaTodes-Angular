import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  uri: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization' , environment.token)

  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization',environment.token)
    }
  }
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/tema-controller/GetAllUsingGET_1` , this.token)
  }
  
  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/tema-controller/GetByIdUsingGET_1/${id}`, this.token)
  } 

  getByDescricaoTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/tema-controller/GetByDescricaoUsingGET/${descricao}` , this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/tema-controller/postUsingPOST_1` ,tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/tema-controller/putUsingPUT_1` ,tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/tema-controller/deleteUsingDELETE_1/${id}`, this.token)
  }
  


   }
