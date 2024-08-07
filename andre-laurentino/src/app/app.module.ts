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
import { SobreMimComponent } from './views/sobre-mim/sobre-mim.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './views/post/post.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const sharedPages = [
  HomeComponent,
  BlogComponent,
  PortfolioComponent,
  AgendaComponent,
  ContatoComponent,
  ErroPageComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...sharedPages,
    SobreMimComponent,
    PostComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
