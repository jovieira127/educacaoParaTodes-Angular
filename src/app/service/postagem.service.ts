import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  uri: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = { headers: new HttpHeaders().set('Authorization', environment.token) }
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/postagem-controller/GetByIdUsingGET/${id}`, this.token)
  }
  
  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/postagem-controller/GetByTituloUsingGET/${titulo}`, this.token)
  }


  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/postagem-controller/GetAllUsingGET`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/postagem-controller/postUsingPOST`, postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://educacaoparatodes.herokuapp.com/swagger-ui/#/postagem-controller/putUsingPUT', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://educacaoparatodes.herokuapp.com/swagger-ui/#/postagem-controller/deleteUsingDELETE/${id}`, this.token)
  }
}
