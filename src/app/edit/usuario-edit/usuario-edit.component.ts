import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number

  senhaConfirmada: string
  tipoUsuario: string


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
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
