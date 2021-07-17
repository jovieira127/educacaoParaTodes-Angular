import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.css']
})
export class MenuPerfilComponent implements OnInit {
  nome = environment.nome
  foto = environment.foto
  id = environment.id

  usuario: Usuario = new Usuario()
  idUsuario: number

  senhaConfirmada: string
  tipoUsuario: string

  constructor(
    private router: Router,
    public authService: AuthService,
    private route: ActivatedRoute,
    private alerta: AlertasService

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.idUsuario = this.route.snapshot.params['id']
    if(this.idUsuario != undefined){
      this.findByIdUser(this.idUsuario)
    }
    
    this.authService.refreshToken()

  }

  editUserId(){
    this.findByIdUser(this.id)
  }

  confirmaSenha(event:any){
    this.authService.refreshToken()
    this.senhaConfirmada = event.target.value
  }

  selecionarUsuario(event:any){
    this.authService.refreshToken()
    this.tipoUsuario = event.target.value
  }

  atualizar(){
    this.authService.refreshToken()
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.senhaConfirmada){
      this.alerta.showAlertDanger('As senhas estão diferentes!')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/perfil-voluntario'])
        this.alerta.showAlertSuccess('Usuário atualizado com sucesso! Faça o login novamente.')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/login'])
      })

    }
}

  findByIdUser(id: number){
    this.authService.refreshToken()
    this.authService.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    }) 

}
}


 