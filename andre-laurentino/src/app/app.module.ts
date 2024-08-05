import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { ContatoComponent } from './views/contato/contato.component';
import { SharedModule } from "./shared/shared.module";
import { ErroPageComponent } from './views/erro-page/erro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PortfolioComponent,
    AgendaComponent,
    ContatoComponent,
    ErroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
