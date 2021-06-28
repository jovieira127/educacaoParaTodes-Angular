import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [

  {path: '', redirectTo:'tela-home', pathMatch: 'full'},
  

  {path:'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'saiba-mais', component: SaibaMaisComponent},
  {path: 'time', component: TimeComponent},
  {path: 'menu-superior', component: MenuSuperiorComponent},
  {path: 'tela-home', component: TelaHomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }