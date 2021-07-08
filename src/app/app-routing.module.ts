import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MeusConteudosComponent } from './meus-conteudos/meus-conteudos.component';
import { PerfilAdicionarVideosComponent } from './perfil-adicionar-videos/perfil-adicionar-videos.component';
import { PerfilVoluntarioComponent } from './perfil-voluntario/perfil-voluntario.component';
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
  {path: 'tela-home', component: TelaHomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'menu-lateral', component: MenuLateralComponent},
  {path: 'perfil-adicionar-videos', component: PerfilAdicionarVideosComponent},
  {path: 'perfil-voluntario', component: PerfilVoluntarioComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'meus-conteudos', component: MeusConteudosComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }