import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    TelaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
