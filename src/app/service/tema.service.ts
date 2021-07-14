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
    return this.http.get<Tema[]>(`${this.uri}/temas` , this.token)
  }
  
  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`${this.uri}/temas/${id}`, this.token)
  } 

  getByDescricaoTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${this.uri}/temas/descricao/${descricao}` , this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`${this.uri}/temas` ,tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(`${this.uri}/temas` ,tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`http://localhost:8080/temas/${id}`, this.token)
  }
  


   }
