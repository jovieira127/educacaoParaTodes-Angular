import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  selector: 'app-meus-conteudos',
  templateUrl: './meus-conteudos.component.html',
  styleUrls: ['./meus-conteudos.component.css']
})
export class MeusConteudosComponent implements OnInit {

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
    private alerta: AlertasService,
    public sanitizer: DomSanitizer 
    
    ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    this.authService.refreshToken()

    this.findByIdUser()
    this.getAllTemas()
  }


  getAllPostagens() {
    this.postagemService.refreshToken()
    this.postagemService.getAllPostagens().subscribe((resposta: Postagem[]) => {
      this.listaPostagens = resposta

    })

  }

  findByIdTema() {
    this.temaService.refreshToken()
    this.temaService.getByIdTema(this.idTema).subscribe((resposta: Tema) => {
      this.tema = resposta
    })
  }



  getAllTemas() {
    this.temaService.refreshToken()
    this.temaService.getAllTema().subscribe((resposta: Tema[]) => {
      this.listaTemas = resposta
    })
  }

  findByIdUser() {
    this.authService.refreshToken()
    this.authService.getByIdUser(this.idUser).subscribe((resposta: Usuario) => {
      this.usuario = resposta
    })
  }
  publicar() {
    this.postagemService.refreshToken()
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUser
    this.postagem.usuario = this.usuario



    this.postagemService.postPostagem(this.postagem).subscribe((resposta: Postagem) => {
      this.postagem = resposta
      this.router.navigate(['/meus-conteudos'])
      this.alerta.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.findByIdUser()
    })
  }

  atualizar(){
    this.postagemService.refreshToken()
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alerta.showAlertSuccess('Postagem atualizada com sucesso')
      this.router.navigate(['/meus-conteudos'])
    })
  }

apagar(){
  this.postagemService.refreshToken()
  this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
    this.alerta.showAlertSuccess('Postagem apagada com sucesso')
    this.router.navigate(['/login'])
  })
}
atualizarLinkVideo(linkVideo: string) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(linkVideo);

}

}

