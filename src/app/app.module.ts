import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { TimeComponent } from './time/time.component';
import { TelaVisualizacaoComponent } from './tela-visualizacao/tela-visualizacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';



import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { PerfilVoluntarioComponent } from './perfil-voluntario/perfil-voluntario.component';
import { PerfilEstudanteComponent } from './perfil-estudante/perfil-estudante.component';

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
    PerfilEstudanteComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
