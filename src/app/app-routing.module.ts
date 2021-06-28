import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { TimeComponent } from './time/time.component';


const routes: Routes = [
  {path: 'rodape', component: RodapeComponent},
  {path: 'saiba-mais', component: SaibaMaisComponent},
  {path: 'time', component: TimeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
