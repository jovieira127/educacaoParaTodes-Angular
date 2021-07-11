import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idPost: number


  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  /*  linkVideo: linkVideo */

  usuario: Usuario = new Usuario()
  idUser = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.temaService.refreshToken()

    this.findByIdUser()
    this.getAllTemas()
    this.getAllPostagens()
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resposta: Usuario) => {
      this.usuario = resposta
    })

  }
  getAllTemas() {
    this.temaService.getAllTema().subscribe((resposta: Tema[]) => {
      this.listaTemas = resposta
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resposta: Postagem[]) => {
      this.listaPostagens = resposta

    })

  }


}
