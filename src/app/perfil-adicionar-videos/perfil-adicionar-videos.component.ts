import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';


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
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.temaService.refreshToken()
    this.findAllTemas()
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
}
