import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-perfil-adicionar-videos',
  templateUrl: './perfil-adicionar-videos.component.html',
  styleUrls: ['./perfil-adicionar-videos.component.css']
})
export class PerfilAdicionarVideosComponent implements OnInit {

  postagem: Postagem = new Postagem() 

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema:number
 
  user: Usuario = new Usuario()
  idUser = environment.id


  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.temaService.refreshToken()
    this.findAllTemas()
   /*  this.getAllTemas() */
  }

  findByIdtema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resposta: Tema)=>{
      this.tema = resposta
    })
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  
  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('tema cadastrado com sucesso')
     this.findAllTemas()
      this.tema = new Tema()
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
 
    this.user.id = this.idUser
    this.postagem.usuario = this.user
 
    this.postagemService.postPostagem(this.postagem).subscribe((resposta: Postagem)=>{
      this.postagem = resposta
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
    })
  }

}
