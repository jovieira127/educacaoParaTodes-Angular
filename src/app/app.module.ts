import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { OrderModule } from 'ngx-order-pipe';

import { PerfilAdicionarVideosComponent } from './perfil-adicionar-videos/perfil-adicionar-videos.component';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { TimeComponent } from './time/time.component';
import { TelaVisualizacaoComponent } from './tela-visualizacao/tela-visualizacao.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { PerfilVoluntarioComponent } from './perfil-voluntario/perfil-voluntario.component';
import { PerfilEstudanteComponent } from './perfil-estudante/perfil-estudante.component';
import { FeedComponent } from './feed/feed.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MeusConteudosComponent } from './meus-conteudos/meus-conteudos.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MenuPerfilComponent } from './menu-perfil/menu-perfil.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    RodapeComponent,
    SaibaMaisComponent,
    TimeComponent,
    TelaVisualizacaoComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    TelaHomeComponent,
    PerfilVoluntarioComponent,
    PerfilEstudanteComponent,
    FeedComponent,   
    PerfilAdicionarVideosComponent, TemaEditComponent, TemaDeleteComponent, MeusConteudosComponent, 
    AlertasComponent, 
    MenuPerfilComponent, UsuarioEditComponent, 
    PostagemEditComponent, PostagemDeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,

    
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
