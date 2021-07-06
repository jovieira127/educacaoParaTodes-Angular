import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/perfil-voluntario.service';

@Component({
  selector: 'app-perfil-voluntario',
  templateUrl: './perfil-voluntario.component.html',
  styleUrls: ['./perfil-voluntario.component.css']
})
export class PerfilVoluntarioComponent implements OnInit {
 
  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private perfilService: TemaService
    ) { }

  ngOnInit() { 
    
    if(environment.token == ''){
    this.router.navigate(['/login'])
    
  }
  }

}
