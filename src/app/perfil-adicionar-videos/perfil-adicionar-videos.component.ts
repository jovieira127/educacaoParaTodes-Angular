import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/perfil-voluntario.service';

@Component({
  selector: 'app-perfil-adicionar-videos',
  templateUrl: './perfil-adicionar-videos.component.html',
  styleUrls: ['./perfil-adicionar-videos.component.css']
})
export class PerfilAdicionarVideosComponent implements OnInit {


  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private perfilService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.perfilService.refreshToken()
    this.findAllTemas()
  }

  findAllTemas() {
    this.perfilService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar() {
    this.perfilService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('tema cadastrado com sucesso')
     this.findAllTemas()
      this.tema = new Tema()
    })
  }
}
