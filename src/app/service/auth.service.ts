import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = { headers: new HttpHeaders().set('Authorization', environment.token) }
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://educacaoparatodes.herokuapp.com/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://educacaoparatodes.herokuapp.com/usuarios', usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://educacaoparatodes.herokuapp.com/usuarios/${id}` )
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }

  voluntarie(){
    let ok:  boolean = false

    if (environment.tipo == 'voluntarie'){
      ok = true
    }

    return ok
  }  

}
