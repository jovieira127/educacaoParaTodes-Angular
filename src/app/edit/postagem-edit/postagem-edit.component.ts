import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {


  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  postagem: Postagem = new Postagem()
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private temaService: TemaService,
/*     private postagemService: PostagemService */
  ) { }

  
  ngOnInit() {

    window.scroll(0,0)
    
    if(environment.token == ''){
this.router.navigate(['/entrar'])
    }

  let id = this.route.snapshot.params['id']
  this.findByIdPostagem(id)
   }

findByIdPostagem(id:number){
  this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
    this.postagem = resp
  })
}

findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
    this.tema = resp
  })
}

findAllTemas(){
  this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
    this.listaTemas = resp
  })
}

atualizar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema
  
  this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
    this.postagem = resp
    alert('Postagem atualizada com sucesso')
    this.router.navigate(['/inicio'])
  })
}

}