import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

usuario: Usuario= new Usuario()
idUser= environment.id


  constructor(

    public authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.refreshToken()

    this.findByIdUser()
  }

  findByIdUser() {
    this.authService.refreshToken()
    this.authService.getByIdUser(this.idUser).subscribe((resposta: Usuario) => {
      this.usuario = resposta
    })
  }
}