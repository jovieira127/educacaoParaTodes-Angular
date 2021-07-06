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
import { TemaComponent } from './tema/tema.component';



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
    PerfilAdicionarVideosComponent, TemaComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
