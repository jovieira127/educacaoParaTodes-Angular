import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-meus-conteudos',
  templateUrl: './meus-conteudos.component.html',
  styleUrls: ['./meus-conteudos.component.css']
})
export class MeusConteudosComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.temaService.refreshToken()
    
    this.getAllPostagens()
    this.getAllTemas()
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resposta: Postagem[]) => {
      this.listaPostagens = resposta

    })

  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resposta: Tema[]) => {
      this.listaTemas = resposta
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resposta: Usuario) => {
      this.user = resposta
    })
  }
}
